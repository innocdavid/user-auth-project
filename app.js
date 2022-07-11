// required modules
const express = require('express');
require('dotenv').config();
require('./db/db')

// instantiating express
const app = express();

// setting routes
app.get('/', (req, res) => {
  res.send('Hello from the server');
});

// data
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

// server listening
app.listen(port, hostname, () => {
  if (process.env.NODE_ENV !== 'test')
  console.log(`server running at http://${hostname}:${port}`)
});