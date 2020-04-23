$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('trnsp');
    } else {
      $('nav').removeClass('trnsp');
    }
  });