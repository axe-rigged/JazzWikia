const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//jotain rules tänne myös hahmoa varten. Hamoon pitäisi pystyä lisätä miraclet lennosta ja maksaa pointeista mitä on. Miracles:[miracle1,miracle2...]
//mahdollinen kuvan tallenus hahmon naamasta oma models tallentaa koko hahmo ja tarkistus
//JÄtetty pois xp ja disvanteage homma. Myös Mind skill template pitäisi tehdä
//mind: [{{skillname:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}}}],
//permission ja sourcelle omat.
//Kaikissa on dice ja sit jotenkin tarkastuksessa tai sit sivulla tehdäään matikkaa niiden kautta jolla miinustetaa point oikein.
var character = new Schema(
    {
        point: {type: Number, required: true},
        name: {type: String, required: true, maxlength: 200},
        occupation: {type: String, required: true, maxlength: 200},
        loyalty: {type: String, required: true, maxlength: 200},
        passion: {type: String, required: true, maxlength: 200},
        body: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        coordination: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        sense: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        mind: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        charm: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        command: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        willpower: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        basewill: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        athletics: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        block: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        brawling: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        endurance: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        weaponb: {weaponname:{type: String, required: true, maxlength: 50}, dices:{regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}}}, //Weapon name can be too short but dont know longest weapon name.... goole
        dodge: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        driving: {vehicle:{type: String, required: true, maxlength: 50}, dice:{type: Number, required: true}},
        lockpicking: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        stealth: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        weaponc: {weaponname:{type: String, required: true, maxlength: 50}, dices:{regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}}},
        empathy: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        perception: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        scrutiny: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        lie: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        perform: {skill:{type: String, required: true, maxlength: 50}, dices:{regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}}},
        persusasion: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        interrogation: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        intimidation: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        leadership: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        stability: {regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}},
        archetype: {type:{type: String, required: true, maxlength: 50}, cost:{type: Number, required: true}}, //pitääkö lyödäpoikki kahteen osaa. Statsit ja super voimat ja ne?
        power: [{miracle:{type: Object}, dices:{regular:{type: Number, required: true}, hard:{type: Number, required: true}, wiggle:{type: Number, required: true}}}] //<-- Miraclet tähän jotenkin.
    }
);