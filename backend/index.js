const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const router = require("./urls");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

const mongoDB = "mongodb://localhost:27017/wikia";
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Mahdollisesti jossakin vaiheessa pitäisi vääntää unitest rakennukseen ominaisuuksille.
app.listen(3000, () => {console.log("Server is running on port 3000");})