require.config({
	 shim: {
		    underscore: {
		      exports: '_'
		    },
		    backbone: {
		      deps: ['underscore', 'jquery'],
		      exports: 'Backbone'
		    },
		    dt_bootstrap: {
			      deps: ['datatable'],
			      exports: 'dt_bootstrap'
			    }
			   
		  },
  paths: {
    jquery: '../lib/jquery-1.9.1.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone',
    templates: '../templates',
    datatable: '../lib/jquery.dataTables.min',
    dt_bootstrap: '../lib/DT_bootstrap',
    custom : 'custom'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});