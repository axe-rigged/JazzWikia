const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./apis/power");
const routerE = require("./apis/equipment");
const routerM = require("./apis/minion");
const routerA = require("./apis/archetype")

const app = express();
//Learn better way to handel crossorigin request thinks for nodejs(cors or handmade) and django-cors. Understand better way concept
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.8.116:3000')
    next();
});
app.use(bodyParser.json());
app.use("/api/power", router);
app.use("/api/equipment", routerE)
app.use("/api/minion", routerM)
app.use("/api/", routerA)

//Tee mahdollisesti databaseen admin user varmuudeksi. Hyvät tavat oppia databasen käsittelyssä.
//Kummiskin teen sitä mariadb ja mysql kanssa niin parempi oppia tässäkin.
const mongoDB = "mongodb://localhost:27017/wikia";
mongoose.connect(mongoDB);
const db = mongoose.connection; // teeme objectin meidän connectionista ja sitten alemmas tarkistetaan ongelmat
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Mahdollisesti joku tunnistautuminen olisi kiva tehdä jotta voisi olla admin ominaisuuksia lisätä ja käviät vain katsoa
const port = 8080;
app.listen(port, () => {console.log(`Server is running on port ${port}`);});