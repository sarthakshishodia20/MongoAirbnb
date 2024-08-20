const express=require("express");
const router=express.Router();

// Posts
router.get("/",(req,res)=>{
    res.send("Get for posts ID");
})

// Show users
router.get("/:id",(req,res)=>{
    res.send("Get for Show post");
})

// new users
router.post("/",(req,res)=>{
    res.send("Post for post");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete for post");
})

module.exports=router;