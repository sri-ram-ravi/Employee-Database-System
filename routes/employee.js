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

router.post("/employee/new",(req,res)=>{
    let newEmployee={
        name:req.body.name || "",
        designation:req.body.designation || "",
        salary:req.body.salary || ""
    }
    console.log(newEmployee);

    Employee.create(newEmployee)
        .then(employee=>res.send({"message":"employee created successfully"}))
        .catch(err=>res.send({"message":"can't able to add employee"}));
})

router.get("/employee/allemployee",(req,res)=>{
    Employee.find({})
        .then(employee=>res.send(employee))
        .catch(err=>console.log("can't able to show employee"))
})

module.exports=router;