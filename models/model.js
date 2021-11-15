const mongoose = require('mongoose');
let rate= Math.floor(Math.random()*5)
const booksSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },

    publecYear: {
        type: Number,
        required: true,
        validate:{validator:(v)=>{
            const date=new Date().getFullYear()
            return v < date
        }}
    },

    language: {
        type: String,
        required: true,
        validate:{validator:(v)=>{
            return v.length === 2
        }}
    },

    rating:{
        type:Number,
        required:false,
        default:rate,
        validate:{validator:(v)=>{
            return (v<6 && v>0)
        },message:'error'}
    }
});


const bookModel = mongoose.model('bookdata', booksSchema);


module.exports = {
    bookModel
}

