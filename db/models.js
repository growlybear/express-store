var mongoose = require('mongoose');
var schemas = require('./schemas'); // picks up index.js, which references each Schema

var models = {};

Object.keys(schemas).forEach(function (name) {
  models[name] = mongoose.model(name, schemas[name]);
});

module.exports = models;
