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

  /*
  if(Scrollings > $('.me').offset().top - 400) {

    $('.me').each(function(){

      $('.me').addClass('showing-me');

    });

  }
  */

  var done = true;

  if(Scrollings > $('.diagram').offset().top - 400) {

    if(done) {
      $(".bar1").animate({width:'200px'},1000);
      $(".bar2").animate({width:'260px'},1000);
      $(".bar3").animate({width:'120px'},1000);
      $(".bar4").animate({width:'160px'},1000);
      done = false;
    }


  }

});
