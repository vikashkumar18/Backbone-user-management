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
		//DONT REMOVE ANYTHING!!
	var users;
	var user;
	var defaultlistview;
	var createUserView;
	var editListView;
    var app_router = new AppRouter;	
    
    
    
	 function refresh(){
    	var urlArr = Backbone.history.fragment.split('/');
    	if(urlArr[4]==undefined ){
   
			sessionStorage.brandFlag=false;
			sessionStorage.priceFlag=false;
			sessionStorage.categoryFlag=false;
		}
    	
    	
    	if( urlArr[4]!='searchBrandSegment'){
    		sessionStorage.brandFlag=false;
    	}
    	

    	else if( urlArr[4]!='searchPriceSegment'){
    		sessionStorage.priceFlag=false;
    	}

    	else if( urlArr[4]!='searchCategorySegment'){
    		sessionStorage.categoryFlag=false;
    	}
    	
	
	
		if($(".main-header").html()==""){
			console.log("Refresh Done : "+Backbone.history.fragment);
			headerView.render();
		
			
				
			
			switch(urlArr.length) {
			case 4 : 
				console.log("Refresh-Render : " + urlArr[1]);
				innerMenuView.render({mainid:urlArr[1]});
				break;
				
			case 5 : 
			case 6 : 
				console.log("Refresh-Render : " + urlArr[1]);
				innerMenuView.render({mainid:urlArr[1]});
				sideMenuView.render({mainid:urlArr[1],subid:urlArr[3]});
				break;
			}
		}
	}
    
    
   
    
   app_router.on('route:home', function () {
    	if(!users)
    	 users = new Users();
    	$(".content").empty();
    	if(editListView){
  			console.log("removed1");
  			editListView.remove();
  		}
    	
    	if(defaultlistview){
    	 defaultlistview.remove();
    	 var newDOMel=$('<div class="content"/>');
    	 $(".content-parent").append(newDOMel);
    	}
    	defaultlistview=new DefaultListView({collection:users});
    	defaultlistview.render();
    	
    	
    	

    });
   
   app_router.on('route:createUser', function () {
   		
   		$(".content").empty();
   		if(!user){
   			user = new User();
   		}
   		
   		if(!createUserView){
	   createUserView = new CreateUserView({model:user});
   		}
	   createUserView.render();
   	
   	

   });
   app_router.on('route:editUser', function () {
  		
  		$(".content").empty();
  		if(defaultlistview){
  		 defaultlistview.remove();
  		 var newDOMel=$('<div class="content"/>');
    	 $(".content-parent").append(newDOMel);
  		}
  		if(!users){
  	    	 users = new Users();
  		}
  		if(editListView){
  			console.log("removed");
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
