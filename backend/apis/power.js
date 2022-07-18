const express = require("express");
const router = express.Router();
const {extras} = require("../models/powers");

//Toimiva database ja perus API pyynnöt. res.status(koodi numero).json({objecti:value}) tai json(object)
//res.send(string tai object). Selvitä onko eroa
router.get("/nice", (req,res)=>{
    res.send("Hello to Wildtalen wikia");
})

//Extra//
//Get all power(extras)
router.get("/", async(req, res)=>{
    try{
        const power = await extras.find();
        return res.status(200).json(power);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create and save new power(extra)
router.post("/", async(req,res)=>{
    console.log(req.body);
    const power = new extras({
        name: req.body.name,
        type: req.body.type,
        cost: req.body.cost,
        effect: req.body.effect
    });
    try{
        const newPower = await power.save();
        res.status(201).json(newPower)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});


//delete by name/ID
router.delete("/", (req,res)=>{
    extras.deleteOne({name: req.body.name}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//PUT by name/ID.
//Tulevaisuudessa vaihda name => id
router.put("/", (req,res)=>{
    extras.findOneAndUpdate({name: req.body.name}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Extra//

module.exports = router;