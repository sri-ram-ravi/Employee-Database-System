const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const employeeRoutes=require("./routes/employee");
/*-------------------------------------------------------*/
dotenv.config({path:"./config.env"})
const app=express();
const port=process.env.PORT;
/*-------------------------------------------------------*/
app.listen(port,()=>console.log("server is started"))
mongoose.connect(process.env.DATABASE_LOCAL);
/*-------------------------------------------------------*/
app.use(employeeRoutes)