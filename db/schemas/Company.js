var mongoose = require('mongoose');

module.exports = new mongoose.Schema({

  name: String,
  location: {
    city: String,
    country: String
  },
  sector: String,
  founded: Date

});
