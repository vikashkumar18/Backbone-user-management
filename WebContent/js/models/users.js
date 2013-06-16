 
define([
  'underscore',
  'backbone',
  'models/user'
], function(_, Backbone,User){


var Users = Backbone.Collection.extend({
	model: User,
	url: "api/allUsers"
});
return Users;
});