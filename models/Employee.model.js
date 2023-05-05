const mongoose= require("mongoose");

const employeeSchema= mongoose.Schema({
    department_id : String,
    position_id : String,
    name : String,
    email : String,
    phone_number : Number,
    address : String,
    created_at : String,
    updated_at : String
})

const EmployeeModel= mongoose.model("employee", employeeSchema);

module.exports= {
    EmployeeModel
}