const { Router } = require('express');
const Requirements = require('../models/Requirements');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Requirements.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Requirements.getAll());
  });
