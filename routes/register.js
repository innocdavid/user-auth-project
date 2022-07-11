// required modules
const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { application } = require('express');

// router
const router = express.Router();

// get 
router.get('/', (req, res) => {
  res.send('User Registration');
});

// register endpoint
router.post('/', (req, res) => {
  // hashing password
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // creating new user
      const user = new User({
        email: req.body.email,
        password: hashedPassword
      });
      // saving the user
      user 
        .save()
        // return sucess
        .then((result) => {
          res.status(200).send({
            message: 'User registered',
            result
          });
        })
        // return error
        .catch((error) => {
          res.status(500).send({
            mesage: 'Error registering user',
            result
          });
        });
    })
    .catch((error) => {
      res.status(500).send({ 
        message: 'Password not hashed',
        error
      });
    });
});




module.exports = router