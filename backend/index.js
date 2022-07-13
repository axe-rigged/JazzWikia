const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./apis/power");
const routerE = require("./apis/equipment");
const routerM = require("./apis/minion");

const app = express();
app.use(bodyParser.json());
app.use("/api/power", router);
app.use("/api/equipment", routerE)
app.use("/api/minion", routerM)

//Tee mahdollisesti databaseen admin user varmuudeksi. Hyvät tavat oppia databasen käsittelyssä.
//Kummiskin teen sitä mariadb ja mysql kanssa niin parempi oppia tässäkin.
const mongoDB = "mongodb://localhost:27017/wikia";
mongoose.connect(mongoDB);
const db = mongoose.connection; // teeme objectin meidän connectionista ja sitten alemmas tarkistetaan ongelmat
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Mahdollisesti jossakin vaiheessa pitäisi vääntää unitest rakennukseen ominaisuuksille.
//Mahdollisesti joku tunnistautuminen olisi kiva tehdä jotta voisi olla admin ominaisuuksia lisätä ja käviät vain katsoa
app.listen(3000, () => {console.log("Server is running on port 3000");});