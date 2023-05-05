const express= require("express");
const { PositionModel } = require("../models/Position.model");

const positionRouter= express.Router();

positionRouter.get("/", async(req, res)=>{
   try {
     const data= await PositionModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while fetching the position");
   }
})

positionRouter.get("/:id", async(req, res)=>{
    const id=req.params.id
    try {
      const data= await PositionModel.find({_id:id});
      res.send(data);
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while fetching the position");
    }
 })

 positionRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
      const newData= new PositionModel(data);
      await newData.save();
      res.send("Added new position");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while adding new position");
    }
 })

 positionRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await PositionModel.findByIdAndUpdate({_id:id}, data);
      res.send("Updated position");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating position");
    }
 })

 positionRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
      await PositionModel.findByIdAndDelete({_id:id});
      res.send("Deleted position");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating position");
    }
 })



module.exports= {
    positionRouter
}