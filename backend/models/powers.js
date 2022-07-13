const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Automaatisesti tehty _id ja _v
var miracle = new Schema(
    {
        name: {type: String, required: true, maxlength: 200, unique: true},
        cost:{type: Number, required: true},
        qualities: {type: String, required: true, maxlength: 20}, //TARSKITA ennen tallenusta et on vain ADU ja mahdollisesti +2,4,6, jne
        extraFlaws: [{
            quality:{type: String, required: true, maxlength:100}, //Which quality NEEDED
            extraFlawName:{type: String, required: false, maxlength: 100}, //what extra/flaws gets NOT NEEDED ALWAYS
            cost:{type: Number, required: false}, //cost for extra NOT NEEDED ALWAYS
            ruleforextra:{type: String, required: false, maxlength:100}, //if/then yleensä tarvii tän NOT NEEDED ALWAYS
            capacity:{type: String, required: true, maxlength:100} //capacity aka range/kohde/"N/A" TARVITAAN AINA
        }],
        effect: {type: String, required: true} // TARVITAAN AINA SELITYS KYVYSTÄ MITÄ SE TEKEE
    }
);

var extra = new Schema(
    {
        name: {type: String, required: true, maxlength: 200, unique: true},
        type: {type: String, required: true, maxlength: 20},    //types == extra, flaws, focus
        cost: {type: Number, required: true},
        effect: {type: String, required: true}
    }
);

//advanceAmmo ja ammoQualities voi myöhemmin tehdä jos jaksaa aseita varten
var equipment = new Schema(
    {
        name: {type: String, required: true, maxlength: 200, unique: true},
        damage: {width:{type: Number, required: true}, sk: {type: String, required: true, maxlength: 8}},     //jotenkin tehdä int ja str
        qualities: {type: String, required: false, maxlength: 200}
    }
);

var source = new Schema(
    {
        name: {type: String, required: true, maxlength: 50},
        cost: {type: Number, required: true},
        rule: {type: String, required: true}
    }
);

var permission = new Schema(
    {
        name: {type: String, required: true, maxlength: 50},
        cost: {type: Number, required: true},
        rule: {type: String, required: true}
    }
);

//Arche on tehty source, permissionista ja kuvailu sitä varten
var arche = new Schema(
    {
        name: {type: String, required: true, maxlength: 50},
        cost: {type: Number, required: true},
        sources: {type: String, required: true, maxlength: 50}, //name of srouce
        permissions: {type: String, required: true, maxlength: 50},
        description: {type: String, required: true}
        //Vielä tarvisi intrincis/meta qualitys
    }
);

const extras = mongoose.model("extras", extra, 'extras');
const miracles = mongoose.model("miracles", miracle, 'miracles');
const equipments  = mongoose.model("equipments", equipment, 'equipments');
const sources = mongoose.model("sources", source, 'sources');
const permissions = mongoose.model("permissions", permission, 'permissions');
const arches = mongoose.model("arches", arche, 'arches');

module.exports = { extras: extras, miracles: miracles, equipments:equipments, sources:sources, permissions:permissions, arches:arches}