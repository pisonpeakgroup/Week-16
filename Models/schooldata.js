
// Basic MONGOOSE'S Schema   
   const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    yearOfPublication: {
        type: Number
    },
    description: {
        type: String
    },
    isbn: {
        type: String
    }
});

const bookModel = mongoose.model('Schooldata', bookSchema);

module.exports = bookModel;
