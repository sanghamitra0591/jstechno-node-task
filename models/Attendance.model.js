const mongoose= require("mongoose");

const attendanceSchema= mongoose.Schema({
    employee_id : String,
    in_time : String,
    out_time : String,
    created_at : String,
    updated_at : String,
})

const AttendanceModel= mongoose.model("attendance", attendanceSchema);

module.exports= {
    AttendanceModel
}