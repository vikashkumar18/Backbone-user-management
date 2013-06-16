define([ 'jquery', 'underscore','backbone','custom','datatable','dt_bootstrap','views/edit-list-item',
         'text!templates/edit-list.html'], 
		function($, _, Backbone,custom,dataTable,dt_bootstrap,EditListItemView,EditListTmpl)
{
	
	var EditListView = Backbone.View.extend({
		el : $('<div />'),
		events:{
			'click .saveAll':'updateAll'
		},
	initialize:function(){
		_.bindAll(this,'render','renderOne','updateAll');
	
		 this.listenTo(this.collection, 'add', this.renderOne);
	      this.listenTo(this.collection, 'reset', this.render);
	      
		
		this.collection.fetch({reset:true});
		
	},
	updateAll:function(){
		console.log("in update all");
		if($.calculateProgressInterval()){
		window.setTimeout(function(){$('.btn-success').trigger('click')},1000);
		}
		
		
	},
	render:function(){
		$.defaultSideMenu(3);
		
		if(this.collection.length > 0){

			var template = _.template(EditListTmpl);
			this.$el.html(template);
			$(".content").append(this.el);
			$(".progress").hide();
		this.collection.each(this.renderOne);
		
		
			$('#user-edit-list').dataTable( {
				"sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				"sPaginationType": "bootstrap",
				"oLanguage": {
					"sLengthMenu": "_MENU_ records per page"
				}
			} );
		
		
        }
	},
	renderOne:function(model){
		 var row=new EditListItemView({model:model});
		 
		 $('.tbds').append(row.render().$el);
	        
	        
	}
	});
	return EditListView;
	});