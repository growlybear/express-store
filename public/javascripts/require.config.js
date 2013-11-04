require.config({
  baseUrl: 'javascripts',
  paths: {
    'jquery': '../components/jquery/jquery',
    'jquery-ui': '../components/jquery-ui/ui/jquery-ui',
    'd3': '../components/d3/d3',
    'nvd3': '../components/nvd3/nv.d3',
    'hbs': '../components/handlebars/handlebars',
    'ember': '../components/ember/ember',
    'ember-data': '../components/ember-data/dist/ember-data',
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },

    'ember-data': ['ember'],
    'nvd3': ['d3'],
    'jquery-ui': ['jquery'],
    'd3': {
      exports: 'd3'
    }
  }
});

// go
require(['app']);
