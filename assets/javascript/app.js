$( document ).ready(function() {

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

    $('#page2').click(function () {
        $('.page1').css("display", "none");
        $('.page2').css("display", "flex");
        $('.first').css("background-color", "#4aaaa5");
        $(".second").css("background-color", "black");
    })

    $('#next').click(function () {
        $('.page1').css("display", "none");
        $('.page2').css("display", "flex");
        $('.first').css("background-color", "#4aaaa5");
        $(".second").css("background-color", "black");
    })

    $('#page1').click(function () {
        $('.page1').css("display", "flex");
        $('.page2').css("display", "none");
        $('.second').css("background-color", "#4aaaa5");
        $(".first").css("background-color", "black");
    })

    $('#previous').click(function () {
        $('.page1').css("display", "flex");
        $('.page2').css("display", "none");
        $('.second').css("background-color", "#4aaaa5");
        $(".first").css("background-color", "black");
    })
});
