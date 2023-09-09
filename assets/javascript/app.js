$(document).ready(function () {
    $('#nav-home').css("border-bottom", "2px solid #4aaaa5");

    $("#animate-btn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1000);
    });

    function navbar() {
        setTimeout(function () {
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

    $(".mb-3").click(function (e) {
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

    $(window).scroll(function () {
        // This is then function used to detect if the element is scrolled into view
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
        if (elementScrolled('.invisible2')) {
            $('#nav-about').css("border-bottom", "2px solid #4aaaa5");
            $('#nav-home').css("border-bottom", "none");
            $('#nav-portfolio').css("border-bottom", "none");
            $('#nav-contact').css("border-bottom", "none");
        } else if (elementScrolled('.invisible')) {
            $('#nav-home').css("border-bottom", "2px solid #4aaaa5");
            $('#nav-about').css("border-bottom", "none");
            $('#nav-portfolio').css("border-bottom", "none");
            $('#nav-contact').css("border-bottom", "none");
        } else if (elementScrolled('.invisible3')) {
            $('#nav-portfolio').css("border-bottom", "2px solid #4aaaa5");
            $('#nav-about').css("border-bottom", "none");
            $('#nav-home').css("border-bottom", "none");
            $('#nav-contact').css("border-bottom", "none");
        } else if (elementScrolled('.invisible5')) {
            $('#nav-contact').css("border-bottom", "2px solid #4aaaa5");
            $('#nav-about').css("border-bottom", "none");
            $('#nav-home').css("border-bottom", "none");
            $('#nav-portfolio').css("border-bottom", "none");
        }
    });

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    function myFunction() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

});
