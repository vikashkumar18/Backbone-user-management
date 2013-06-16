define([
  'underscore',
  'backbone'
], function(_, Backbone){
var User= Backbone.Model.extend({
	
	idAttribute: 'userId',
	  urlRoot : 'api/allUsers'

});
return User;
});