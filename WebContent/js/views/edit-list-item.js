define([ 'jquery', 'underscore', 'backbone','custom','text!templates/edit-list-item.html'], 
		function($, _, Backbone,custom,EditListItemTmpl)
{
	var EditListItemView =Backbone.View.extend({
		el:'tr',
		initialize: function(){
			//this.listenTo(this.model, 'change', this.render);
		      this.listenTo(this.model, 'destroy', this.remove);
		},
		events:{
			'click .btn-danger' : 'deleteuser',
			'click .btn-primary': 'makeContentEditable',
			'click .btn-success':'saveModel'
			
		},
		makeContentEditable:function(){
			//alert(this.$el.children("td:nth-child(2)").children().html());
			var that=this;
			this.progressUpdate();
			this.$("td div").attr('contenteditable','true').addClass('content-edit');
			this.$("td:nth-child(2) div").focus();
			this.$('td a.edit-save').html("update");
			this.$('td a.edit-save').removeClass('btn-primary').addClass('btn-success');
			
		},
		progressUpdate: function(){
			$.addProgressLimit();
			if($.getProgressLimit()==1){
				$('a.saveAll').removeClass('disabled').removeClass('inactive-link');
			}
		},
		saveModel:function(){
			console.log("save model");
			var fname = this.$("td:nth-child(2) div").html();
			var lname = this.$("td:nth-child(3) div").html();
			var phno = this.$("td:nth-child(4) div").html();
			var email = this.$("td:nth-child(5) div").html();
			var that = this;
			this.model.set({
				firstName:fname,
				lastName:lname,
				phoneNumber:phno,
				email:email
			});
			
			this.model.save(null,{
				success:function(user){
					console.log("user update success!");
					that.progressSave();
					that.$('td a.edit-save').html("edit");
					that.$('td a.edit-save').removeClass('btn-success').addClass('btn-primary');
					that.$("td div").attr('contenteditable','false').removeClass('content-edit');
				},
				error:function(){
					alert("user updation failed!!");
				}
			});
			
		},
		progressSave:function(){
			$.setProgress();
			$.deductProgressLimit();
			if($.getProgressLimit()==0){
				
				$('a.saveAll').addClass('disabled').addClass('inactive-link');
			}
		},
		deleteuser:function(){
			var r= confirm("delete user?");
			if(r==true){
			 this.model.destroy();
			}
		},
		render: function() {
			console.log("render called");
			var template = _.template(EditListItemTmpl,this.model.toJSON());
	        
	        this.setElement( $(template) );
	        
	        return this;
	    }
	});
	return EditListItemView;
	});
