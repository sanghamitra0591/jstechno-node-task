const mongoose= require("mongoose");

const departmentSchema= mongoose.Schema({
    name : String,
    created_at : String,
    updated_at : String
})

const DepartmentModel= mongoose.model("department", departmentSchema);

module.exports= {
    DepartmentModel
}