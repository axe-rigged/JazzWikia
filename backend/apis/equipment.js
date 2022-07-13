const express = require("express");
const routerE = express.Router();
const {equipments} = require("../models/powers");

//Equipment//
//Get
routerE.get("/", async(req, res)=>{
    try{
        const equiment = await equipments.find();
        res.send(equiment);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create
routerE.post("/", async(req,res)=>{
    const equiment = new equipments({
        name: req.body.name,
        damage: req.body.damage,
        qualities: req.body.qualities,
    });
    try{
        const newEquipment = await equiment.save();
        res.status(201).json(newEquipment)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});


//Delete
routerE.delete("/", (req,res)=>{
    extras.deleteOne({name: req.body.name}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//PUT
routerE.put("/", (req,res)=>{
    extras.findOneAndUpdate({name: req.body.name}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Equipment//
module.exports = routerE;