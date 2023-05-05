const express= require("express");
const { SalaryCalculationModel } = require("../models/salarycalculation.model");

const salaryCalculationRouter= express.Router();

salaryCalculationRouter.get("/", async(req, res)=>{
   try {
     const data= await SalaryCalculationModel.find();
     res.send(data);
   } catch (error) {
    console.log(error);
    res.send("Something went wrong while calculating the salary.");
   }
})


module.exports= {
    salaryCalculationRouter
}