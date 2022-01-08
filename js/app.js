'use strict';

/*
 * A Design by GraphBerry
 * Author: GraphBerry
 * Author URL: http://graphberry.com
 * License: http://graphberry.com/pages/license
 *
 * slideDown() -> animate()
 */
/*
 * 구글맵보다 카카오맵
 */

 // Open offsite navigation.
 $('#nav-expander').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation.
 $('.menu .close').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation after user click on an link in navigation.
$('.menu  a').on('click', function(e) {
    e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

//Calculate full with of jumbotron.
 function homeFullScreen() {

    var homeSection = $('.home');
    var windowWidth = $(window).outerWidth();
    var windowHeight = $(window).outerHeight();
	
    if (homeSection.hasClass('home-fullscreen')) {
        $('.home-fullscreen').css('height', windowHeight);
    }
    if(windowWidth < 800){
	$('.header-container').css('height', windowHeight/2.5);
	$('#skill-landscape').style.display="none";
    } else {
	$('#skill-landscape').style.display="none";
    }
    if(windowWidth >= 1000){
	$('#skill-landscape').style.display="none";
    }
}


	
function openProject() {

		    var portfolioItem = $('.portfolio-item  a');
		    var singleProject = $('#single-project');
	
		    portfolioItem.click(function () {
			   var link = $(this).attr('href');
			if(singleProject.is(':empty')) {
				projectLoad()
			} else {
				singleProject.animate({
					height: "hide", 
				}, 400);
				
				setTimeout(function () {
					singleProject.empty();
					projectLoad();
				}, 620);
			}
			
			function projectLoad(){
				singleProject.load(link, function (response, status) {
				if (status === "error") {
				    alert("An error");
				} else {
					singleProject.hide();
				    singleProject.animate({
					height: "show", 
				   }, 500);	

				    var closeProject = $('#close-project');
				    closeProject.on('click', function () {
					singleProject.animate({
						height: "hide", 
				   	}, 500);
					setTimeout(function () {

					    singleProject.empty();
					}, 500);
				    });
				}
			    });
			}
			  

			  return false;
		   });
}	
//Initialization 
$(window).load(function () {
    openProject();
    homeFullScreen();

    smoothScroll.init();
});




//What happen on window resize
$(window).resize(function () {
    homeFullScreen();
});
