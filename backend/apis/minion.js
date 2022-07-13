const express = require("express");
const routerM = express.Router();
const {minions} = require("../models/minions");

//Minion//
routerM.get("/", async(req, res)=>{
    try{
        const minion = await minions.find();
        res.send(minion);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create
routerM.post("/", async(req,res)=>{
    const minion = new minions({
        name: req.body.name,
        points: req.body.points,
        basestats: req.body.basestats,
        basewill: req.body.basewill,
        skills: req.body.skills
    });
    try{
        const newMinion = await minion.save();
        res.status(201).json(newMinion)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//delete
routerM.delete("/", (req,res)=>{
    extras.deleteOne({name: req.body.name}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//put
routerM.put("/", (req,res)=>{
    extras.findOneAndUpdate({name: req.body.name}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Minion//
module.exports = routerM;