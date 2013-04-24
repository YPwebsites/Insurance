/* ----- This script is used to take the .skinBg background-image (definable by user at a site level) and generates an <img> to be resized as a "cover" background. This method is used for compatibility with IE. */

$(window).load(function(){
    // only runs if .skinBg is defined as background-size: cover;
	if ( $('.skinBg').css("background-size") == "cover" ) {
        // uses the background-image url and scrubs it for an img src
		var url = $('.skinBg').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    	var bgImg = $('<img />');
    	bgImg.bind('load', function(){	});
        // inserts the new image tag at the end of div.skinBg
    	$('div.skinBg').append(bgImg);
        // adds the necessary id to the img tag for resizing script to target
    	bgImg.attr('src', url).attr('id', 'coverBGimg');
        // removes the background-image from div.skinBg
		$('div.skinBg').css("background-image", "none");
	       
        /* ----- Start Resizing Script ----- */
        // defining variables
    	var theWindow 		= $(window),
        	$bg				= $("img#coverBGimg"),
            aspectRatio		= $bg.width() / $bg.height();
				
        function resizeBg() {
            // conditional comparing height to width ratios of user window and loaded image
        	if ( ( theWindow.width() / theWindow.height() ) < aspectRatio ) {
                // .bgheight sets <img> height to 100%
            	$bg.removeClass().addClass('bgheight');
                // defines negative left margin from image width
				var margLeft = -1 * ( $bg.width() / 2 );	
            } else {
                // .bgwidth sets <img> width to 100%
            	$bg.removeClass().addClass('bgwidth');
                // defines negative left margin from image width
				var margLeft = -1 * ( $bg.width() / 2 );
            }
            // img#coverBGimg has left of 50%, pre-defined negative margin re-centers the image
			$bg.css("margin-left", margLeft + "px");
        }
        // resizes img on window resizing    
        theWindow.resize(resizeBg).trigger("resize");
	}
});