const express=require("express");
const router=express.Router();

// home route
router.get("/",(req,res)=>{
    res.send("Hi I am root");
})

// users
router.get("/",(req,res)=>{
    res.send("Get for Users ID");
})

// Show users
router.get("/:id",(req,res)=>{
    res.send("Get for Show Users");
})

// new users
router.post("/",(req,res)=>{
    res.send("Post for users");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete for users");
})

module.exports=router;