const mongoose= require("mongoose");

const salarycalculationSchema= mongoose.Schema({
    employee_id : String,
    calculation_date : String,
    status : String,
    created_at : String,
    updated_at : String,

})

const SalaryCalculationModel= mongoose.model("salarycalculation", salarycalculationSchema);

module.exports= {
    SalaryCalculationModel
}