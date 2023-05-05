const express= require("express");
const { DepartmentModel } = require("../models/Department.model");

const departmentRouter= express.Router();

departmentRouter.get("/", async(req, res)=>{
   try {
     const data= await DepartmentModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while fetching the departments");
   }
})

departmentRouter.get("/:id", async(req, res)=>{
    const id=req.params.id
    try {
      const data= await DepartmentModel.find({_id:id});
      res.send(data);
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while fetching the department");
    }
 })

 departmentRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
      const newData= new DepartmentModel(data);
      await newData.save();
      res.send("Added new Department");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while adding new Department");
    }
 })

 departmentRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await DepartmentModel.findByIdAndUpdate({_id:id}, data);
      res.send("Updated Department");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating Department");
    }
 })

 departmentRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
      await DepartmentModel.findByIdAndDelete({_id:id});
      res.send("Deleted Department");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating Department");
    }
 })



module.exports= {
    departmentRouter
}