$(document).ready(function () {

//NAVBAR
// hide menu button after click
	$('.openbtn').click(function() {
		$('.openbtn').css("display", "none");
	});

// show menu button after closing menu
	$('.closebtn').click(function() {
		$('.openbtn').css("display", "initial");
	});

// toggle nav
    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  	});  

// dropdown slide effect
	$('.dropdown').on('show.bs.dropdown', function() {
    	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
  	$('.dropdown').on('hide.bs.dropdown', function() {
    	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  	});

// feedback close/open
	function toggleform() {
		$("#feedback-form").toggle("slide");
	}
	$("#feedback-tab").click(toggleform);
	$("#feedback-form form").on('submit', toggleform);

//show feedback after scrolling to bottom
	$(function(){
	   $(window).scroll(function(){
	       if($(document).height()==$(window).scrollTop()+$(window).height()){
	           setTimeout(toggleform, 2000);
	           // toggleform();
	       }
	   });
	});
// feedback show after x sec
	// setTimeout(toggleform, 10000);

});
