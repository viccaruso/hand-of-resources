const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Book.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Book.getAll());
  });
