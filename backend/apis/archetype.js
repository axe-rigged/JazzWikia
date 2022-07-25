const express = require("express");
const routerA = express.Router();
const {sources, permissions, arches} = require("../models/powers");
//Opette tietää millon käyttää custom response res.status.json() vs res.send(). KORJAA EXTRAT POIS
//sources
//Get
routerA.get("/source", async(req, res)=>{
    try{
        const source = await sources.find();
        res.send(source);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Post
routerA.post("/source", async(req,res)=>{
    const source = new sources({
        name: req.body.name,
        cost: req.body.cost,
        rule: req.body.rule

    });
    try{
        const newSource = await source.save();
        res.status(201).json(newSource)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Delete
routerA.delete("/source", (req,res)=>{
    sources.deleteOne({_id: req.body.source._id}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//Put
routerA.put("/source", (req,res)=>{
    sources.findOneAndUpdate({_id: req.body.source._id}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//sources
//permissions
//Get
routerA.get("/permission", async(req, res)=>{
    try{
        const permission = await permissions.find();
        res.send(permission);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Post
routerA.post("/permission", async(req,res)=>{
    const permission = new permissions({
        name: req.body.name,
        cost: req.body.cost,
        rule: req.body.rule
    });
    try{
        const newPermission = await permission.save();
        res.status(201).json(newPermission)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Delete
routerA.delete("/permission", (req,res)=>{
    permissions.deleteOne({_id: req.body.permission._id}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//Put
routerA.put("/permission", (req,res)=>{
    permissions.findOneAndUpdate({_id: req.body.permission._id}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//permissions
//arches
//Get
routerA.get("/arche", async(req, res)=>{
    try{
        const arche = await arches.find();
        res.send(arche);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Post
routerA.post("/arche", async(req,res)=>{
    const arche = new arches({
        name: req.body.name,
        cost: req.body.cost,
        source: req.body.source,
        permissions: req.body.permission,
        description: req.body.description
    });
    try{
        const newArche = await arche.save();
        res.status(201).json(newArche)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});

//Delete
routerA.delete("/arche", (req,res)=>{
    arches.deleteOne({_id: req.body.arche._id}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});

//Put
routerA.put("/arche", (req,res)=>{
    arches.findOneAndUpdate({_id: req.body.arche._id}, req.body, {new:true}, async(err,result)=>{
        if(err){return res.status(500).json({message: err.message})}
        else{return res.status(200).json(result)}
    });

});
//arches
module.exports = routerA;