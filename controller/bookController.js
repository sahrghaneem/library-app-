
const booksMod = require('../models/model').bookModel;


const getAllBooks = (req, res) => {
    booksMod.find({}, (err, book) => {
        if (err) throw err;
        return res.status(200).json(book)
    })
}

const addNewBook = (req, res) => {
    const { book, author, publecYear, language, rating } = req.body
    let bookAdd = new booksMod({
        book,
        author,
        publecYear,
        language,
        rating
    })

    bookAdd.save((err, data) => {
        if (err)
        return res.status(404).send(err)
        return res.status(200).send(data)
    })
}

const deleteBook = (req, res) => {
    const { bookId } = req.params
    booksMod.findByIdAndDelete(bookId, (err, data) => {
        if (err)
        return res.status(404).send(err)
        return res.status(200).send(data)
    })
}

const updateBook = (req, res) => {
    const { bookId } = req.params
    const { book, author, publecYear, language, rating } = req.body
    booksMod.findByIdAndUpdate(bookId,{book:book, author:author ,publecYear:publecYear,language:language,rating:rating},{new:true}, (err,data) => {
        if (err)
        return res.status(204).send(err)
        return res.status(201).send(data)

    })
}


module.exports =
{
    getAllBooks,
    addNewBook,
    deleteBook,
    updateBook
}