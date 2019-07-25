function smoothScroll() {
    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

}


var myNavigation = $('.navbar');
stickyDiv = "sticky";
myHeader = $('.main-container').height();

 $(window).scroll(function () {
    if ($(this).scrollTop() > myHeader) {
        myNavigation.addClass(stickyDiv);
    } else {
        myNavigation.removeClass(stickyDiv);
    }
});