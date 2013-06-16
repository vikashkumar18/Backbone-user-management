define([ 'jquery', 'underscore','backbone','custom','datatable','dt_bootstrap','views/list-item',
         'text!templates/default-list.html'], 
		function($, _, Backbone,custom,dataTable,dt_bootstrap,ListItemView,DefaultListTmpl)
{
	
	var DefaultListView = Backbone.View.extend({
		el : '.content',
		events:{
			
		},
	initialize:function(){
		_.bindAll(this,'render','renderOne');
	   
		 this.listenTo(this.collection, 'add', this.renderOne);
	      this.listenTo(this.collection, 'reset', this.render);
	      
		
		this.collection.fetch({reset:true});
		
	},
	
	render:function(){
		$.defaultSideMenu(1);
		if(this.collection.length > 0){
			var template = _.template(DefaultListTmpl);
			this.$el.html(template);
		this.collection.each(this.renderOne);
		
		
		
       
		
			$('#user-list').dataTable( {
				"sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				"sPaginationType": "bootstrap",
				"oLanguage": {
					"sLengthMenu": "_MENU_ records per page"
				}
			} );
		
		
        }
	},
	renderOne:function(model){
		 var row=new ListItemView({model:model});
		 
		 $('.tbds').append(row.render().$el);
	        
	        
	}
	});
	return DefaultListView;
	});