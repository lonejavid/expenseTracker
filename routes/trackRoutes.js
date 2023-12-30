const express=require('express');
const expense=require('../controllers/expense')
const router=express.Router();
router.get('/',expense.expense);
router.post('/add',expense.add);
module.exports=router