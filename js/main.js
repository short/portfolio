$(function() {

  //Mooth aanroepen om alle functionaliteiten te kunnen gebruiken
  Mooth.init();

  //De automatic scroll naar een div met de navigatie
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
  });

});


$(window).scroll(function(){

  //parrallax
  var Scrollings = $(this).scrollTop();

  $('.header h1').css({
    'transform' : 'translate(0px, '+ -Scrollings /4 +'%)'
  });

});
