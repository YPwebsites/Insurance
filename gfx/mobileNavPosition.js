

$(document).ready(function(){
	// this script removes the map button from the bottom mobile quick nav when the address is left off the site details
	var clickMap = $('a.m-click-map');	
	var clickMail = $('a.m-click-mail');
	var clickPhone = $('a.m-click-phone');
	
	if ($.trim( clickMap.attr("href") ) == "") {
		clickMap.css("display", "none");
		clickMail.css("width", "50%");
		clickPhone.css("width", "50%");
	} 
	else {
		clickMap.css("width", "33%");
		clickMail.css("width", "34%");
		clickPhone.css("width", "33%");
	}
	
	/* This script is used to measure the overall height of the #m-nav and position it accordingly */
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	var childHpx = $('nav#m-menu ul#nav li').css("height");
	var childH = childHpx.replace("px", "");
	var childN = $('nav#m-menu ul#nav li').size();
	var parentH = ((childH*-1)*(childN*1));
	
	$('nav#m-menu').css("top", "-1000px");
});
function navTab() {
		var childHpx = $('nav#m-menu ul#nav li').css("height");
		var childH = childHpx.replace("px", "");
		var childN = $('nav#m-menu ul#nav li').size();
		var parentH = ((childH*-1)*(childN*1));
		if ( $('#navTab').hasClass("active") ) {
			$('nav#m-menu').css("top", parentH + "px");
			$('#navTab').removeClass("active");
		} else {
			$('nav#m-menu').css("top", "0");
			$('#navTab').addClass("active");
		}
		return false;
	}
	
