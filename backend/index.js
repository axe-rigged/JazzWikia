const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const mongoose = require("mongoose")

const port = 3000;
const mongoDB = "mongodb://localhost:27017/wikia";
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req,res)=>{res.send("Hello World");});

app.listen(port, () => {console.log(`Server is running on port ${port}`);})
