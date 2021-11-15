const express = require('express');
const bookController=require('../controller/bookController');
const router = express.Router()

router.get('/',(req,res)=>{
    bookController.getAllBooks(req,res)
}).post('/new',(req,res)=>{
    bookController.addNewBook(req,res)
}).delete('/delete/:bookId',(req,res)=>{
    bookController.deleteBook(req,res)
}).put('/:bookId',(req,res)=>{
    bookController.updateBook(req,res)
})


module.exports=router;