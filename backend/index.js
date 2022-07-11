const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const router = require("./urls");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

//Tee mahdollisesti databaseen admin user varmuudeksi. Hyvät tavat oppia databasen käsittelyssä.
//Kummiskin teen sitä mariadb ja mysql kanssa niin parempi oppia tässäkin.
const mongoDB = "mongodb://localhost:27017/wikia";
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Mahdollisesti jossakin vaiheessa pitäisi vääntää unitest rakennukseen ominaisuuksille.
//Mahdollisesti joku tunnistautuminen olisi kiva tehdä jotta voisi olla admin ominaisuuksia lisätä ja käviät vain katsoa
app.listen(3000, () => {console.log("Server is running on port 3000");})