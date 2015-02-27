$(document).ready(function() {

});

$(window).scroll(function() {
    var navPostion = ($('nav').offset().top  - $(window).scrollTop());
    var viewportHeight = $(window).height() - 45;

    if(navPostion <= 0) {
      $('nav').css({ top: 0, position: "fixed" });
    }

    if( $(window).scrollTop() <= viewportHeight) {
      $('nav').attr('style', '');
    }
});