const express = require("express");
const routerMir = express.Router();
const {miracles} = require("../models/powers")

//Miracle//
//Get
routerMir.get("/", async(req, res)=>{
    try{
        const miracle = await miracles.find();
        return res.status(200).json(miracle);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});
//Create WE MIGHT NEED TO DO SOMEWORK HERE
routerMir.post("/", async(req,res)=>{
    console.log(req.body);

    if(req.body.cost < 0){req.body.cost = 1;}//cost pitää aina olla min yksi.

    const mira = new miracles({
        name: req.body.name,
        cost: req.body.cost,
        qualities: req.body.qualities,
        miracles: req.body.miracles,
        effect: req.body.effect
    });
    try{
        const newMira = await mira.save();
        res.status(201).json(newMira)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});
//Delete
routerMir.delete("/", (req,res)=>{
    console.log(req.body)
    miracles.deleteOne({_id: req.body.miracle._id}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//PUT 
routerMir.put("/", (req,res)=>{
    miracles.findOneAndUpdate({_id: req.body.miracle._id}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Extra//

module.exports = routerMir;