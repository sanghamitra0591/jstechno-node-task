const mongoose= require("mongoose");

const salarySchema= mongoose.Schema({
    position_id : String,
    basic_salary : String,
    hra : String,
    da : String,
    other_allowances : String,
    gross_salary : String,
    created_at : String,
    updated_at : String,
})

const SalaryModel= mongoose.model("salary", salarySchema);

module.exports= {
    SalaryModel
}