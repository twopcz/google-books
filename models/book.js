'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  link: { type: String, required: true },
  saved: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model(`Book`, bookSchema);

module.exports = Book;
