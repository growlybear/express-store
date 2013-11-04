define(['ember', 'ember-data', 'nvd3', 'jquery-ui'], function (Ember) {

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true // debugging
  });


  // Data Store
  App.Adapter = DS.RESTAdapter.extend();
  App.Store = DS.Store.extend({
    revision: 12,
    adapter: App.Adapter.create()
  });


  // Models
  App.Product = DS.Model.extend({
    name       : DS.attr('string'),
    description: DS.attr('string'),
    price      : DS.attr('number')
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
  });

  // Products route
  App.ProductsRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('product');
    }
  });


  return App;
});
