'use strict';

const Mongoose = require('mongoose');

const bookSchema = Mongoose.Schema({
    title: String,
    author: String
});

bookSchema.methods.bookReference = function () {

    const reference = this.title + ' - ' + this.author;
    console.log(reference);
};

module.exports = Mongoose.model('Book', bookSchema);
