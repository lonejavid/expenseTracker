const express=require('express');
const expense=require('../controllers/expense')
const router=express.Router();
router.get('/',expense.expense);
router.post('/add',expense.add);
router.get('/getData',expense.getData)
router.delete('/delete/:id',expense.delete);
router.put('/edit/:data',expense.edit)
module.exports=router