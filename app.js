// required modules
const express = require('express');
require('dotenv').config();
require('./db/db')

// instantiating express
const app = express();

// setting up routes
const registerRoute = require('./routes/register');

// MIDDLEWARE
app.use(express.json());

// setting routes
app.use('/register', registerRoute);

// data
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME;

// server listening
app.listen(port, hostname, () => {
  if (process.env.NODE_ENV !== 'test')
  console.log(`server running at http://${hostname}:${port}`)
});