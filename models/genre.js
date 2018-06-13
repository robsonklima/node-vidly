const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isActive: {
    type: Boolean
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    isActive: Joi.boolean()
  };

  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.genreSchema = genreSchema;
exports.validate = validateGenre;