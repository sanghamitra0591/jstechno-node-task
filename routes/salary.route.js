const express= require("express");
const { SalaryModel } = require("../models/Salary.model");

const salaryRouter= express.Router();

salaryRouter.get("/", async(req, res)=>{
   try {
     const data= await SalaryModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while fetching the salary");
   }
})

salaryRouter.get("/:id", async(req, res)=>{
    const id=req.params.id
    try {
      const data= await SalaryModel.find({_id:id});
      res.send(data);
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while fetching the salary");
    }
 })

 salaryRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
      const newData= new SalaryModel(data);
      await newData.save();
      res.send("Added new salary");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while adding new salary");
    }
 })

 salaryRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await SalaryModel.findByIdAndUpdate({_id:id}, data);
      res.send("Updated salary");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating salary");
    }
 })

 salaryRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
      await SalaryModel.findByIdAndDelete({_id:id});
      res.send("Deleted salary");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating salary");
    }
 })



module.exports= {
    salaryRouter
}