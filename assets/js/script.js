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

  VanillaTilt.init(document.querySelectorAll(".services-card"), {
    max: 25,
    speed: 400,
    gyroscope:false,
  });
 
  jQuery(function () {
    jQuery('.services-card').matchHeight('byRow:false');
  });
 
 AOS.init({
    offset: 150,
    duration: 1200,
    disable: 'mobile',
    useClassNames: true,
  });
 
jQuery('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      }
  }
});
function fadeToZero()
{
    $("#loader-overlay").fadeOut(550);    
}
var myVar;
function loader() {
  myVar = setTimeout(showPage, 2500);
  myVar = setTimeout(fadeToZero, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-overlay").style.display = "none";
}
