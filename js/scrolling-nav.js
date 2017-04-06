$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar").removeClass("navbar-fixed-top");
      $(".navbar").addClass("navbar-fixed");
    } else {
        $(".navbar").removeClass("navbar-fixed");
        $(".navbar").addClass("navbar-fixed-top");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 67
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
