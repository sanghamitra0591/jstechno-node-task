const express= require("express");
const { connection } = require("./configs/db");
const { departmentRouter } = require("./routes/department.route");
const { positionRouter } = require("./routes/position.route");
const { employeeRouter } = require("./routes/employee.route");
const { salaryRouter } = require("./routes/salary.route");
const { attendanceRouter } = require("./routes/attendance.route");
const { userRouter } = require("./routes/user.route");
const { Authentication } = require("./middleware/Authentication.middleware");
const app= express();

app.use(express.json());

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Homepage");
})


app.use("/users", userRouter);


app.use(Authentication);


app.use("/departments", departmentRouter);
app.use("/positions", positionRouter);
app.use("/salaries", salaryRouter);
app.use("/employees", employeeRouter);
app.use("/attendances", attendanceRouter);



app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log("Unable to connect to DB");
    }
    console.log(`Running at port ${process.env.port}`)
})