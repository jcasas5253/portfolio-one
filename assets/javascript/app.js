$("#animate-btn").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top        
    }, 1000);
});

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

var stickyTop = $('.navbar').offset().top;
$(window).on( 'scroll', function(){
   if ($(window).scrollTop() >= stickyTop) {
       $('.navbar').css({position: "fixed", top: "0px", right:"0px"});
   } else {
       $('.navbar').css({position: "relative", top: "0px"});
   }
});
