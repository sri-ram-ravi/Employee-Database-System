const express=require("express");
/*----------------------------------*/
const Employee=require("../model/employee")
/*----------------------------------*/
const router=express.Router();
/*----------------------------------*/
router.get("/",(req,res)=>{
    res.send({"message":"welcome to employee database system"})
})

router.get("/employee/new",(req,res)=>{
    res.send({"message":"add employee"})
})

module.exports=router;