const express=require('express');
const path = require('path');
const userDetails=require('../models/models');
exports.expense=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));    
}
exports.add=async(req,res)=>{
    const{amount,desc,category} = req.body;
    await userDetails.create({
        amount:amount,
        desc : desc ,
        category:category
    })
    res.redirect('/');
}
exports.getData=async(req,res)=>{
    const data= await userDetails.findAll();
    res.send(data);
}
exports.delete=async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    userDetails.destroy({
        where:{
            id:id
        }
    })
    res.redirect('/add')    
}
exports.edit=async(req,res)=>{
    console.log("heelo sir")
  // console.log(req.body)
   const entryToUpdate = await userDetails.findByPk(req.body.id);
    entryToUpdate.amount = req.body.amount;
    entryToUpdate.desc = req.body.desc;
    entryToUpdate.category = req.body.category;
    // Save the updated entry
    await entryToUpdate.save();
   res.redirect('/');
}
