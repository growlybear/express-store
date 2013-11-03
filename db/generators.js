var ch = require('charlatan');
var moment = require('moment');

var colors = 'IndianRed SeaGreen NavyBlue Silver Platinum Gold Black'.split(/\s+/);

module.exports = {

  Product: function () {

    var categories = {
      Music      : ['DVD', 'CD', 'iPod', 'Cable'],
      Electronics: ['TV', 'Monitor', 'Laptop', 'Phone', 'Camera', 'Keyboard', 'Tablet'],
      Home       : ['Table', 'Chair', 'Bed', 'Dinner-Set', 'Silverware', 'Sofa', 'Shelf'],
      Clothing   : ['Shirt', 'Trousers', 'Jacket', 'Mittens', 'Cap', 'Sweater', 'Shorts', 'Scarf', 'Gloves'],
      Grocery    : ['Vegetable', 'Fruit', 'Snack', 'Chocolate', 'Milk', 'Eggs'],
      Children   : ['Book', 'Toy', 'Candy', 'Video Game']
    },
    categoryNames = Object.keys(categories);  // nice :-)

    return function (companyIds) {
      var category = ch.Helpers.sample(categoryNames),
        type = ch.Helpers.sample(categories[category]);

      return {
        name: type + ch.numerify(' - ###'),
        description: ch.Lorem.paragraphs(2),
        manufacturer: ch.Helpers.sample(companyIds),

        color: ch.Helpers.sample(colors), // colors?
        releaseDate: moment().subtract('months', ch.Helpers.rand(12)).toDate(),
        price: ch.Helpers.rand(500, 20),

        category: category,
        model: ch.numerify(ch.letterify('Model-?##?')),
        rating: 1 + ch.Helpers.rand(5),
        reviews: ch.Helpers.rand(100)
      };
    };
  },

  Company: function () {
    
    return function () {
      var sectors = 'Technology Energy Pharmaceuticals Research Finance Real-Estate Electronics'.split(/\s+/);

      return {
        name: ch.Company.name(),
        sector: ch.Helpers.sample(sectors),
        location: {
          city: ch.Address.city(),
          country: ch.Address.country()
        },
        founded: moment().subtract('years', ch.Helpers.rand(20)).toDate()
      };

    };
  },

  Sale: function () {

    return function (productIds) {

      return {
        product: ch.Helpers.sample(productIds),
        quantity: ch.Helpers.rand(100),
        saleDate: moment().subtract('days', ch.Helpers.rand(90)).toDate(),
        color: ch.Helpers.sample(colors)
      };
    };
  }
};