const express= require("express");
const { AttendanceModel } = require("../models/Attendance.model");

const attendanceRouter= express.Router();

attendanceRouter.get("/", async(req, res)=>{
   try {
     const data= await AttendanceModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while fetching the attendance");
   }
})

attendanceRouter.get("/:id", async(req, res)=>{
    const id=req.params.id
    try {
      const data= await AttendanceModel.find({_id:id});
      res.send(data);
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while fetching the attendance");
    }
 })

 attendanceRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
      const newData= new AttendanceModel(data);
      await newData.save();
      res.send("Added new attendance");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while adding new attendance");
    }
 })

 attendanceRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await AttendanceModel.findByIdAndUpdate({_id:id}, data);
      res.send("Updated attendance");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating attendance");
    }
 })

 attendanceRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
      await AttendanceModel.findByIdAndDelete({_id:id});
      res.send("Deleted attendance");
    } catch (error) {
     console.log(error);
     res.send("Something went wrong while updating attendance");
    }
 })



module.exports= {
    attendanceRouter
}