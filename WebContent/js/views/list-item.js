define([ 'jquery', 'underscore', 'backbone','text!templates/list-item.html'], 
		function($, _, Backbone,ListItem)
{
	var ListItemView =Backbone.View.extend({
		el:'tr',
		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
		      this.listenTo(this.model, 'destroy', this.remove);
		},
		events:{
			'click .btn' : 'clear',
			
		},
		clear:function(){
			
			 this.model.destroy();
		},
		render: function() {
			var template = _.template(ListItem,this.model.toJSON());
	        
	        this.setElement( $(template) );
	        
	        return this;
	    }
	});
	return ListItemView;
	});
