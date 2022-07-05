const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var miracle = new Schema(
    {
        name: {type: String, required: true, maxlength: 200},
        cost:{type: Number, required: true},
        qualities: {type: String, required: true, maxlength: 20},
        extraFlaws: [{type: String, required: true, maxlength: 500}], //Jotenkin myös capacity lisätä. Pitäisi saada laittaa monta extras
        effect: {type: String, required: true}
    }
);

var extras = new Schema(
    {
        name: {type: String, required: true, maxlength: 200},
        type: {type: String, required: true, maxlength: 20},    //types == extra, flaws, focus
        cost: {type: Number, required: true},
        effect: {type: String, required: true}
    }
);

var equipment = new Schema(
    {
        name: {type: String, required: true, maxlength: 200},
        damage: {width:{type: Number, required: true}, sk: {type: String, required: true, maxlength: 200}},     //jotenkin tehdä str, int
        qualities: {type: String, required: false, maxlength: 200}
    }
);
//advanceAmmo ja ammoQualities
module.exports = mongoose.model("extras", extras, 'extra');