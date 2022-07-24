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

//Create, back endissä laske pisteet
routerM.post("/", async(req,res)=>{
    console.log(req.body);
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
    minions.deleteOne({_id: req.body.minion._id}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//put
routerM.put("/", (req,res)=>{
    minions.findOneAndUpdate({_id: req.body.minion._id}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Minion//
module.exports = routerM;