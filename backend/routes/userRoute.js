const express = require('express')
const User = require("../models/user")
const router = express.Router()

router.post("/",async (req,res)=>{
    const{name,age,email} = req.body;
    try {
     const userData = await User.create({
         name:name,
         email:email,
         age:age,
        })
       return res.status(201).json({message:"user-added"})
    } catch (error) {
     return res.sendStatus(404).json(error)
    }
 })

 //gets all user
 router.get("/",async (req,res)=>{
     try {
         const showAll =await User.find();
         res.status(200).json(showAll)
     } catch (error) {
         res.send(500).json({message:"error"})
         
     }
 })

 //get single user
 router.get("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const singleId =await User.findById({_id:id});
        res.status(200).json(singleId)
    } catch (error) {
        res.send(500).json({message:"error"})
        
    }
})

//delete
router.delete("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteId =await User.findByIdAndDelete({_id:id});
        res.status(200).json(deleteId)
    } catch (error) {
        res.send(500).json({message:"error"})
        
    }
})

//update
router.patch("/:id",async (req,res)=>{
    const {id} = req.params;
    const{name,email,age} = req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(id, req.body, {new:true,});
        res.status(200).json(updateUser)
    } catch (error) {
        res.send(500).json({message:"error"})
        
    }
})
 module.exports = router;