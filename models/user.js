// required modules
const mongoose = require('mongoose');

// creating schema
const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const Users = mongoose.model('users', UserSchema);

// exporting
module.exports = Users;
