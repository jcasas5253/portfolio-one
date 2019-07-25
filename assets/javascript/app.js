function smoothScroll() {
    window.scroll({
        top: 740,
        left: 0,
        behavior: 'smooth'
    });

}

var stickyTop = $('.navbar').offset().top;
$(window).on( 'scroll', function(){
    if ($(window).scrollTop() >= stickyTop) {
        $('.navbar').css({position: "fixed", top: "0px"});
    } else {
        $('.navbar').css({position: "relative", top: "0px"});
    }
});