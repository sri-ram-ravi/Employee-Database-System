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

router.get("/employee/allemployee",(req,res)=>{
    Employee.find({})
        .then(employee=>res.send(employee))
        .catch(err=>console.log("can't able to show employee"))
})

router.get("/employee/searchemployee",(req,res)=>{
    const name=req.query.name;
    Employee.findOne({name:name})
        .then(employee=>res.send({employee:employee}))
        .catch(err=>res.send({"message":"can't found employee"}))
})

router.put("/employee/updateemployee/:id",(req,res)=>{
    const employeeId=req.params.id;
    Employee.updateOne({_id:employeeId},{$set:{
        name:req.body.name || "",
        designation:req.body.designation || "",
        salary:req.body.salary || ""
    }})
    .then(employee=>res.send({"message":"empoloyee update successfully"}))
    .catch(err=>res.send({"message":"employee not get updated"}));
})

router.delete("/employee/deleteemployee/:id",(req,res)=>{
    const employeeId=req.params.id;
    Employee.deleteOne({_id:employeeId})
    .then(employee=>res.send("employee deleted successfully"))
    .catch(err=>res.send({"message":"can' able to delete employee"}))
})
module.exports=router;