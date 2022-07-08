const express = require("express");
const router = express.Router();
const {extras, equipments, miracles} = require("./models/powers");

//Toimiva database ja perus API pyynnöt
router.get("/", (req,res)=>{
    res.send("Hello to Wildtalen wikia");
})

//Extra//
//Get all power(extras)
router.get("/api/power", async(req, res)=>{
    try{
        const power = await extras.find();
        res.send(power);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create and save new power(extra)
router.post("/api/power", async(req,res)=>{
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
router.delete("/api/power", (req,res)=>{
    extras.deleteOne({name: req.body.name}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//PUT by name/ID.
//Tulevaisuudessa vaihda name => id
router.put("/api/power", (req,res)=>{
    extras.findOneAndUpdate({name: req.body.name}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Extra//

//Equipment//
//Get
router.get("/api/equipment", async(req, res)=>{
    try{
        const equiment = await equipments.find();
        res.send(equiment);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create
router.post("/api/equipment", async(req,res)=>{
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
router.delete("/api/equipment", (req,res)=>{
    extras.deleteOne({name: req.body.name}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//PUT
router.put("/api/equipment", (req,res)=>{
    extras.findOneAndUpdate({name: req.body.name}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//Equipment//

module.exports = router;