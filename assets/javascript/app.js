$("#animate-btn").click(function () {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top        
    }, 2000);
});

$("#nav-home").click(function () {
    $('html, body').animate({
        scrollTop: $(".main-container").offset().top
    }, 2000);
});



var stickyTop = $('.navbar').offset().top;
$(window).on( 'scroll', function(){
    if ($(window).scrollTop() >= stickyTop) {
        $('.navbar').css({position: "fixed", top: "0px"});
    } else {
        $('.navbar').css({position: "relative", top: "0px"});
    }
});
