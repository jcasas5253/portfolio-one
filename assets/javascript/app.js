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
        $('.navbar').css("display", "flex");
        $('#nav-about').css("border-bottom", "2px solid #4aaaa5");
        $('#nav-portfolio').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "none");
    }
});

$(window).scroll(function () {
    if (isScrolledIntoView($('#portfolio'))) {
        $('#nav-about').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "none");
        $('#nav-portfolio').css("border-bottom", "2px solid #4aaaa5");
    }
});

$(window).scroll(function () {
    if (isScrolledIntoView($('#contact'))) {
        $('#nav-about').css("border-bottom", "none");
        $('#nav-portfolio').css("border-bottom", "none");
        $('#nav-contact').css("border-bottom", "2px solid #4aaaa5");
    }
});

$(window).scroll(function () {
    if (isScrolledIntoView($('.invisible'))) {
        $('.navbar').css("display", "none");
    }
});
