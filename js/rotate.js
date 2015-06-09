$(document).ready(function(){
  function rotate() {
    $("#image").rotate({
       bind:
         {
            mouseover : function() {
                $(this).rotate({animateTo:360})
            },
            mouseout : function() {
                $(this).rotate({animateTo:0})
            }
         }
    });
  }
});
