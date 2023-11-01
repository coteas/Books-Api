const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

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

// Show:
// books.get('/:name', (req, res) => {
//     Language.findOne({ name: req.params.name.toLowerCase() })
//         .then((foundLanguage) => {
//             res.json(foundLanguage)
//         })
// })


module.exports = books