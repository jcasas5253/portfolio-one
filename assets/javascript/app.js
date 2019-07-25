$("#animate-btn").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 943,
    }, 1000);
});

$("#nav-about").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 943,
    }, 1000);
});

$("#nav-home").click(function (e) {
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


$("#nav-portfolio").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$("#nav-contact").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

var stickyTop = $('.navbar').offset().top;
$(window).on( 'scroll', function(){
    if ($(window).scrollTop() >= stickyTop) {
        $('.navbar').css({position: "fixed", top: "0px"});
    } else {
        $('.navbar').css({position: "relative", top: "0px"});
    }
});
