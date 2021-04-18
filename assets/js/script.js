jQuery(window).scroll(function () {
    if (this.scrollY > 20) {
        jQuery('.navbar').addClass('nav-small');
        jQuery('.top-button').removeClass('d-none');
    }
    else {
        jQuery('.top-button').addClass('d-none');
        jQuery('.navbar').removeClass('nav-small');
    }
});
jQuery('.menu-btn').on('click', function () {
    jQuery('.menu-btn>i').toggleClass('fa-bars');
    jQuery('.menu-btn>i').toggleClass('fa-times');
});
