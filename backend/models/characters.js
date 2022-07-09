const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//jotain rules tänne myös hahmoa varten. Hamoon pitäisi pystyä lisätä miraclet lennosta ja maksaa pointeista mitä on. Miracles:[miracle1,miracle2...]
//mahdollinen kuvan tallenus hahmon naamasta oma models tallentaa koko hahmo ja tarkistus
//JÄtetty pois xp ja disvanteage homma. Myös Mind skill template pitäisi tehdä
//mind: [{{skillname:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}}}],
//permission ja sourcelle omat
var character = new Schema(
    {
        point: {type: Number, required: true},
        name: {type: String, required: true, maxlength: 200},
        occupation: {type: String, required: true, maxlength: 200},
        loyalty: {type: String, required: true, maxlength: 200},
        passion: {type: String, required: true, maxlength: 200},
        body: {type: Number, required: true},
        coordination: {type: Number, required: true},
        sense: {type: Number, required: true},
        mind: {type: Number, required: true},
        charm: {type: Number, required: true},
        command: {type: Number, required: true},
        willpower: {type: Number, required: true},
        basewill: {type: Number, required: true},
        athletics: {type: Number, required: true},
        block: {type: Number, required: true},
        brawling: {type: Number, required: true},
        endurance: {type: Number, required: true},
        weaponb: {weaponname:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}}, //Weapon name can be too short but dont know longest weapon name.... goole
        dodge: {type: Number, required: true},
        driving: {vehicle:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}},
        lockpicking: {type: Number, required: true},
        stealth: {type: Number, required: true},
        weaponc: {weaponname:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}},
        empathy: {type: Number, required: true},
        perception: {type: Number, required: true},
        scrutiny: {type: Number, required: true},
        lie: {type: Number, required: true},
        perform: {skill:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}},
        persusasion: {type: Number, required: true},
        interrogation: {type: Number, required: true},
        intimidation: {type: Number, required: true},
        leadership: {type: Number, required: true},
        stability: {type: Number, required: true},
        archetype: {type:{type: String, required: true, maxlength: 50}, cost:{type: Number, required: true}}, //pitääkö lyödäpoikki kahteen osaa. Statsit ja super voimat ja ne?
        power: [{}] //<-- Miraclet tähän jotenkin.
    }
);