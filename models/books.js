// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const booksSchema = new Schema({
    name: { type: String, required: true },
    greeting: String,
    pangram: String,
    filler: String
})

// model and export: 
const Books = mongoose.model('Books', booksSchema)
module.exports = Books
