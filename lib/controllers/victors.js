const { Router } = require('express');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send('You hit the POST route!');
  });
