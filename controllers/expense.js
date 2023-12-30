const express=require('express');
const path = require('path');

exports.expense=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
    
}

exports.add=(req,res)=>{
    
}