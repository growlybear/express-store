exports.build = function (app) {

  // index
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express Store with analytics' });
  });

  // products
  app.get('/products', function (req, res) {
    res.send(['server-first', 'server-second', 'server-third']);
  });

};
