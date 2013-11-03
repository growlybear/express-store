var mongoose = require('mongoose');

module.exports = new mongoose.Schema({

  name: String,
  description: String,
  manufacturer: {
    type: 'ObjectId',
    ref: 'Company'
  },

  color: String,
  releaseDate: Date,
  price: Number,

  category: String,
  model: String,

  rating: Number,
  reviews: Number
});
