

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
});


// IE drop down fix	
sfHover = function () {
    var e = document.getElementById("nav");
    if (e != null) {
        var t = e.getElementsByTagName("LI");
        for (var n = 0; n < t.length; n++) {
            t[n].onmouseover = function () {
                this.className += " sfhover"
            };
            t[n].onmouseout = function () {
                this.className = this.className.replace(new RegExp(" sfhover\\b"), "")
            }
        }
    }
};
if (window.attachEvent) window.attachEvent("onload", sfHover)

// end IE drop down fix	