const express = require('express')
const books = express.Router()
const Books = require('../models/books.js')

// books.get('/seed', (req, res) => {
//     Book.insertMany()
//         .then(createdLanguages => {
//             res.json({
//                 message: "Seed successful!"
//             })
//         })
// })

// Index:
books.get('/', (req, res) => {
   res.send('Hello World')
})

books.get('/books', (req, res) => {
    res.send('Hello World')
 })


module.exports = books