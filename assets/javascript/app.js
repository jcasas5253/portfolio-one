$( document ).ready(function() {
    $('#nav-home').css("border-bottom", "2px solid #4aaaa5");


$("#animate-btn").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top        
    }, 1000);
});

function navbar() {
    setTimeout(function(){
        $('.navbar').css("dispaly", "flex");
    }, 1000);
    }

var scrollBottom = $(window).scrollTop() + $(window).height();
$(".about-nav").click(function (e) {   
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
});

$(".home-nav").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".main-container").offset().top
    }, 1000);
});

$(".up-btn").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".main-container").offset().top
    }, 1000);
});


$(".portfolio-nav").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$(".contact-nav").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

//var stickyTop = $('.navbar').offset().top;
//$(window).on( 'scroll', function(){
//   if ($(window).scrollTop() >= stickyTop) {
//       $('.navbar').css({position: "fixed", top: "0px", right:"0px"});
//   } else {
//       $('.navbar').css({position: "relative", top: "0px"});
//   }
//});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    if (isScrolledIntoView($('#about-me'))) {
        $('#nav-about').css("border-bottom", "2px solid #4aaaa5");
        $('#nav-portfolio').css("border-bottom", "none");
        $('#nav-home').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "none");
    } else if (isScrolledIntoView($('#portfolio'))) {
        $('#nav-about').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "none");
        $('#nav-home').css("border-bottom", "none");
        $('#nav-portfolio').css("border-bottom", "2px solid #4aaaa5");
    } else if (isScrolledIntoView($('#contact'))) {
        $('#nav-about').css("border-bottom", "none");
        $('#nav-portfolio').css("border-bottom", "none");
        $('#nav-home').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "2px solid #4aaaa5");
    } else if (isScrolledIntoView($('.main-container'))) {
        $('#nav-about').css("border-bottom", "none");
        $('#nav-portfolio').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "none");
        $('#nav-home').css("border-bottom", "2px solid #4aaaa5");
    }
});

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var ht = $('#about-me').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > ht){
            $('.navbar').css("dispaly", "flex");
        }
    });
});

});
