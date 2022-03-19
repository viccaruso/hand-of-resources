const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Book.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Book.getAll());
  })
  
  .get('/:id', async (req, res) => {
    res.send(await Book.getById(req.params.id));
  })
  
  .patch('/:id', async (req, res) => {
    res.send(await Book.updateById(req.params.id, req.body));
  })
  
  .delete('/:id', async (req, res) => {
    res.send(await Book.deleteById(req.params.id));
  });
