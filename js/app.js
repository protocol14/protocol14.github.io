'use strict';

/*
 * A Design by GraphBerry
 * Author: GraphBerry
 * Author URL: http://graphberry.com
 * License: http://graphberry.com/pages/license
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
    var windowHeight = $(window).outerHeight();

    if (homeSection.hasClass('home-fullscreen')) {

        $('.home-fullscreen').css('height', windowHeight);
    }
}

 //Load details of single project from portfolio.
 function openProject() {

    var portfolioItem = $('.portfolio-item  a');
    var singleProject = $('#single-project');
    
    portfolioItem.click(function () {

        var link = $(this).attr('href');


        singleProject.empty();

         singleProject.load(link, function (response, status) {
             if (status === "error") {
                 alert("An error");
             } else {
                 singleProject.slideDown(500);

                 var closeProject = $('#close-project');
                 closeProject.on('click', function () {
                     singleProject.slideUp(500);
                     setTimeout(function () {

                         singleProject.empty();
                     }, 500);
                 });
             }
         });
     
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


