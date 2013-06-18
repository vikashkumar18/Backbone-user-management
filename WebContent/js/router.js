// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'models/user',
  'views/DefaultList',
  'views/create-user',
  'views/edit-list'], function($,_,Backbone,Users,User,DefaultListView,CreateUserView,EditListView) {
  
  var AppRouter = Backbone.Router.extend({
	  routes: {
	      // Define some URL routes
	    		'':'home',
	    		'createUser':'createUser',
	    		'editUser':'editUser'
	  }
  });
  
  var initialize = function(){
		
	var users;
	var user;
	var defaultlistview;
	var createUserView;
	var editListView;
    var app_router = new AppRouter;	
    
    
    
	
    
   
    
   app_router.on('route:home', function () {
    	if(!users)
    	 users = new Users();
    	
    	if(editListView){
  			
  			editListView.remove();
  		}
    	
    	if(defaultlistview){
    		
    	 defaultlistview.remove();
    	 var newDOMel=$('<div class="content"/>');
    	 $(".content-parent").html(newDOMel);
    	}
    
    	defaultlistview=new DefaultListView({collection:users});
    	defaultlistview.render();
    	
    	
    	

    });
   
   app_router.on('route:createUser', function () {
   		
   	
   		if(!user){
   			user = new User();
   		}
   		
   		if(!createUserView){
	   createUserView = new CreateUserView({model:user});
   		}
	   createUserView.render();
   	
   	

   });
   app_router.on('route:editUser', function () {
  		
  		
  		if(defaultlistview){
  		 defaultlistview.remove();
  		 var newDOMel=$('<div class="content"/>');
    	 $(".content-parent").html(newDOMel);
  		}
  
  		if(!users){
  	    	 users = new Users();
  		}
  		if(editListView){
  		
  			editListView.remove();
  		}
  		editListView = new EditListView({collection:users});
  		editListView.render();
  	
  	

  });
    
   
     
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
