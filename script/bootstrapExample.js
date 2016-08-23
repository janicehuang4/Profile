"use strict"; 
var $liQuery = $("#ss-tabs > li"); 
$liQuery.click(function(){
	$liQuery.removeClass("active"); //when you click off Home tab, make it inactive
	$(this).addClass("active"); //add active class to new tab
});

$(document).ready(function(){
	var menu = $('.menu'); 
	var origOffsetY = menu.offset().top; 

	function scroll(){
		if($(window).scrollTop() >= origOffsetY){
			$('.menu').addClass('sticky');
			$('.content').addClass('menu-padding'); 
		}
		else{
			$('.menu').removeClass('sticky');
			$('.content').removeClass('menu-padding'); 
		}
	}
	document.onscroll = scroll; 
});