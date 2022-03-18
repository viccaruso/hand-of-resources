const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/victors', require('./controllers/victors'));
app.use('/api/v1/musclecars', require('./controllers/muscleCars'));
app.use('/api/v1/books', require('./controllers/books'));
app.use('/api/v1/games', require('./controllers/games'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
