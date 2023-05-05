const mongoose= require("mongoose");

const positionSchema= mongoose.Schema({
    department_id : String,
    name : String,
    created_at : String,
    updated_at : String,
})

const PositionModel= mongoose.model("position", positionSchema);

module.exports= {
    PositionModel
}