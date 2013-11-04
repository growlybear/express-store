define(['ember', 'ember-data', 'nvd3', 'jquery-ui'], function (Ember) {
  var App = Ember.Application.create({
    LOG_TRANSITIONS: true // debugging
  });

  // Routes
  App.Router.map(function () {
    this.route('products');
  });

  // Index route
  App.IndexRoute = Ember.Route.extend({
    redirect: function () {
      this.transitionTo('products');
    }
  })

  return App;
});
