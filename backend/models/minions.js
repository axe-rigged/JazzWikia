const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Pitää lisätä mahdollisuus määrittää hitlocatiot ja niiden määrä. Tarvitaan myös pelaaja hahmolle. tai eläimille

var minion = new Schema(
    {
        name: {type: String, required: true, maxlength: 100},
        points: {type: Number, required: true},
        basestats: {
            body:{type: Number, required: true}, // Me ei tarvita kuin vain tavalliset nopat. Meillä voi olla vaa noppa tässä
            coordinatuion:{type: Number, required: true},
            sense:{type: Number, required: true},
            mind:{type: Number, required: true},
            charm:{type: Number, required: true},
            command:{type: Number, required: true}
        },
        basewill: {type: Number, required: true},
        skills: [{skill:{type: String, maxlength: 50}, dices:{type: Number}}]
    }
);

const minions = mongoose.model("minions", minion, "minions");

module.exports = {minions}