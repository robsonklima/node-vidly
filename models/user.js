const mongoose = require('mongoose');
const Joi = require('joi');


const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 55,
    required: true
  },
  email: {
    type: String,
    maxlength: 255,
    unique: true,
    required: true
  },
  password: {
    type: String,
    maxlength: 255,
    required: true
  }
}));

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string().max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;