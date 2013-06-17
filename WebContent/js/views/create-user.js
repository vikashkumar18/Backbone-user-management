define([ 'jquery', 'underscore', 'backbone','custom','text!templates/create-user.html'], 
function($, _, Backbone,custom,UserTemplate)
{
	
	var CreateUserView = Backbone.View.extend({
		el : $('<div/>'),
		events:{
			'click .btn-success':'saveUser'
		},
	initialize:function(){
		_.bindAll(this,'render','saveUser');
	
		//this.listenTo(this.model, 'change', this.model.save());
		
		
		
	},
	saveUser : function(e){
		 //e.preventDefault();
		
		var obj=$("form").serializeObject();
	    var that = this;
	
		
	
		this.model.set(obj);
		this.model.unset('userId',{silent:true});
		
		//alert(JSON.stringify(this.model));
		this.model.save(null,{
			success:function(user){
				alert("user created successfully!!");
				that.clearField();
			},
			error:function(){
				alert("user creation failed!!");
			}
		});
		
	},
	
	
	render:function(){
		$.defaultSideMenu(2);
		var template = _.template(UserTemplate);
	
		
		this.$el.html(template);
		$(".content").append(this.$el);
		
		
        },
        clearField:function(){
        	$("input:text").val("");
        	$("textarea").val("");
        }
	
	
	});
	return CreateUserView;
	});
