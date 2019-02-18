
$(document).ready(function() {
	disableScroll();
//VARIABLES
// height of homepage
	var homeHeight = $(".home").height();
//scrolled below homepage
	var scrolledPast = false;

	var scrollCount = 0;

//disable scroll
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  if (window.addEventListener) // older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.onwheel = function() {scrollDown();}; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
	    if (window.removeEventListener)
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null; 
	    window.onwheel = null; 
	    window.ontouchmove = null;  
	    document.onkeydown = null;  
	}

// scroll from homepage
	var scrollDown = function() {
			enableScroll();
			$('.openbtn').css("display", "none");
			$("html, body").animate({ scrollTop: homeHeight + 1 }, 2000, function() {
				$('#wrapper').addClass('toggled');					
			});
	}
	$(".icon").click(function(){
		scrollDown();
	});
	

// disable scrolling up to homepage
	$(function() {
	    var scrollPoint = homeHeight;
	    scrolledPast = false;
	    $(window).scroll(function() {
	        $(window).scrollTop() > scrollPoint ? scrolledPast = true : '';
	        $(window).scrollTop() < scrollPoint && scrolledPast == true ? $(window).scrollTop(scrollPoint) : '';
	    }).scroll();
	});

// scroll to homepage
	$(".homebtn").click(function() {
		$('#wrapper').removeClass('toggled');
		$('.openbtn').css("display", "initial");
		disableScroll();
		scrolledPast = false;
		$("html, body").animate({ scrollTop: -homeHeight }, 2000);
	});

//scroll down on mousewheel
	// $(window).scroll(function() {
	// 	scrollCount += 1;
	// 	console.log(scrollCount);
	// 	if(scrollCount > 2) {
	// 		window.onwheel = preventDefault;  // modern standard
	//   		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	//   		// enableScroll();
	//   		scrollDown();
	//   		console.log("ei");
	// 	}
	// });


});