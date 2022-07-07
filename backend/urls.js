const express = require("express");
const router = express.Router();
const {extras} = require("./models/powers");

router.get("/", (req,res)=>{
    res.send("Hello to Wildtalen wikia");
})

//Get all power(extras)
router.get("/power", async(req, res)=>{
    try{
        const power = await extras.find();
        res.send(power);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Create and save new power(extra)
router.post("/power", async(req,res)=>{
    const power = new extras({
        name: req.body.name,
        type: req.body. type,
        cost: req.body.cost,
        effect: req.body.effect
    });
    try{
        const newPower = await power.save();
        res.send(201).json({newPower})
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

module.exports = router;