const express= require("express");
const { EmployeeModel } = require("../models/Employee.model");

const employeeRouter= express.Router();

employeeRouter.get("/", async(req, res)=>{
   try {
     const data= await EmployeeModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while fetching the employee");
   }
})

employeeRouter.get("/:id", async(req, res)=>{
    const id=req.params.id
    try {
      const data= await EmployeeModel.find({_id:id});
      res.send(data);
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while fetching the employee");
    }
 })

 employeeRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
      const newData= new EmployeeModel(data);
      await newData.save();
      res.send("Added new employee");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while adding new employee");
    }
 })

 employeeRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await EmployeeModel.findByIdAndUpdate({_id:id}, data);
      res.send("Updated employee");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating employee");
    }
 })

 employeeRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
      await EmployeeModel.findByIdAndDelete({_id:id});
      res.send("Deleted employee");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating employee");
    }
 })



module.exports= {
    employeeRouter
}