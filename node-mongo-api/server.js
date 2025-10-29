const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/testdb');

app.get('/', (req, res) => {
  res.send('Node.js + MongoDB API running inside Docker Compose!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
