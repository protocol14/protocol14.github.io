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
	$('#skill-portrait').css("display", "block"); 
	$('#skill-landscape').css("display", "none"); 
	    
	$('#portfolio-1').css("display", "block"); 
	$('#portfolio-3').css("display", "none"); 
    } if(windowWidth >= 1000){
	    $('.header-container').css('height', 'auto');
	    
	$('#skill-portrait').css("display", "none"); 
	$('#skill-landscape').css("display", "block"); 
	$('#portfolio-1').css("display", "none"); 
	$('#portfolio-3').css("display", "block");
    } else {
	    $('.header-container').css('height', 'auto');
	$('#skill-portrait').css("display", "block"); 
	$('#skill-landscape').css("display", "none"); 
	    
	$('#portfolio-1').css("display", "block"); 
	$('#portfolio-3').css("display", "none"); 
    }
    
}
	
function openProject() {

		    var portfolioItem = $('.portfolio-item  a');
		    var windowWidth = $(window).outerWidth();
	
		    portfolioItem.click(function () {
			   var link = $(this).attr('href');

			if(windowWidth < 1000){
				var singleProject1 = $('#single-project-1');
				$('html, body').animate({
				    scrollTop: singleProject1.offset().top
				}, 500);
				if(singleProject1.is(':empty')) {
					projectLoad1()
				} else {
					singleProject1.animate({
						height: "hide", 
					}, 400);

					setTimeout(function () {
						singleProject1.empty();
						projectLoad1();
					}, 620);
				}
			} else {
				var singleProject3 = $('#single-project-3');
				
				if(singleProject3.is(':empty')) {
					projectLoad3()
				} else {
					singleProject3.animate({
						height: "hide", 
					}, 400);

					setTimeout(function () {
						singleProject3.empty();
						projectLoad3();
					}, 620);
				}

				
			}
			
			function projectLoad1(){
					singleProject1.load(link, function (response, status) {
					if (status === "error") {
					    alert("An error");
					} else {
						singleProject1.hide();
					    singleProject1.animate({
						height: "show", 
					   }, 500);	

					    var closeProject = $('#close-project');
					    closeProject.on('click', function () {
						singleProject1.animate({
							height: "hide", 
						}, 500);
						setTimeout(function () {

						    singleProject1.empty();
						}, 500);
					    });
					}
				    });
				}
			    
			    function projectLoad3(){
					singleProject3.load(link, function (response, status) {
					if (status === "error") {
					    alert("An error");
					} else {
						singleProject3.hide();
					    singleProject3.animate({
						height: "show", 
					   }, 500);	

					    var closeProject = $('#close-project');
					    closeProject.on('click', function () {
						singleProject3.animate({
							height: "hide", 
						}, 500);
						setTimeout(function () {

						    singleProject3.empty();
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
	
	$('#single-project-1').empty()
	$('#single-project-3').empty()
});
