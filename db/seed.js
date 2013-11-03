var mongoose = require('mongoose');
var _ = require('underscore');
var async = require('async');

var models = require('./models');
var generators = require('./generators');

// set a limit on the number of items generated
var NUM_COMPANIES = 100,
  NUM_PRODUCTS = 1000,
  NUM_SALES = 10000;

// connect to mongo
function run() {
  var db = 'mongodb://localhost/analytics';

  mongoose.set('debug', true);

  mongoose.connect(db);
  var connection = mongoose.connection;

  connection.on('error', console.error.bind(console, 'connection error: '));
  connection.once('open', seed);
}

// run the seed file
function seed() {
  var db = mongoose.connection.db;

  async.waterfall([

    // clean
    function (cb) {
      db.dropDatabase(cb);
    },

    // insert new values
    generateCompanies(NUM_COMPANIES),
    generateProducts(NUM_PRODUCTS),
    generateSales(NUM_SALES)

  ], function (err, results) {
    if (err) console.log('Failed to see the "analytics" DB');

    mongoose.disconnect();
  });
}

// 1. generate companies
function generateCompanies(count) {
  var generateCompany = generators.Company();

  return function (__ignore, cb) {
    var createFns = _.range(count).map(function () {
      var company = generateCompany();
      return models.Company.create.bind(models.Company, company);
    });

    return async.parallel(createFns, cb);
  };
}

// 2. generate products
function generateProducts(count) {
  var generateProduct = generators.Product();

  return function (companies, cb) {
    var companyIds = companies.map(function (c) {
      return c.id;
    })

    var createFns = _.range(count).map(function () {
      var product = generateProduct(companyIds);
      return models.Product.create.bind(models.Product, product);
    });

    return async.parallel(createFns, cb);
  };
}

// 1. generate sales
function generateSales(count) {
  var generateSale = generators.Sale();

  return function (products, cb) {
    var productIds = products.map(function (p) {
      return p.id;
    });

    var createFns = _.range(count).map(function () {
      var sale = generateSale(productIds);
      return models.Sale.create.bind(models.Sale, sale);
    });

    return async.parallel(createFns, cb);
  };
}

// common node idiom
if (require.main === module) run();
