var __progressLimit=0;
var __progressInterval =0;
var __progressWidth = 0;
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
jQuery.defaultSideMenu = function(tabno){
	$("div.sidebar-nav ul li").removeClass("active");
	$('div.sidebar-nav li:nth-child('+tabno+')').addClass("active");
};

jQuery.addProgressLimit = function(){
	__progressLimit +=1;
};
jQuery.deductProgressLimit = function(){
	__progressLimit -=1;
};
jQuery.getProgressLimit = function(){
	return __progressLimit;
};
jQuery.calculateProgressInterval=function(){
	__progressInterval = 100/__progressLimit;
	__progressInterval = Math.ceil(__progressInterval);
	
	console.log("prog interval"+__progressInterval);
	$('.progress').slideDown();
	$.resetProgress();
	
	return true;
	
	
};
jQuery.resetProgress=function(){
	
	__progressWidth=0;
	
	
	
};

jQuery.setProgress=function(){
	
	__progressWidth += __progressInterval;
	$('.bar').css('width', __progressWidth + "%");
	
	if(__progressWidth>=100){
		
		window.setTimeout(slideUp,2000);
		
		
	}
	
	
};


function slideUp(){
	
	
	$('.progress').slideUp();
	
	window.setTimeout(function(){$('.bar').css('width', 0 + "%");}, 1000);
}
	