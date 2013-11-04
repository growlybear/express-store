require.config({
  baseUrl: 'components',
  paths: {
    'jquery'    : 'jquery/jquery',
    'jquery-ui' : 'jquery-ui/ui/jquery-ui',
    'd3'        : 'd3/d3',
    'nvd3'      : 'nvd3/nv.d3',
    'hbs'       : 'handlebars/handlebars',
    'ember'     : 'ember/ember',
    'ember-data': 'ember-data/dist/ember-data',
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },

    'ember-data': ['ember'],
    'nvd3'      : ['d3'],
    'jquery-ui' : ['jquery'],
    'd3': {
      exports: 'd3'
    }
  }
});

// go
require(['../javascripts/app']);
