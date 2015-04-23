$(document).ready(function(){

  //initialize references to div
  var a = 0;
  var b = a+3;

  //check to see if numbers exceed total number of divs(slides)
  function plusOneOrReset(number){
    number += 1;
    if (number > 7){
      number = 1;
    }
    return number;
  };

  //toggle slides to hidden and call
  function hideSlides(){
    a = plusOneOrReset(a);
    b = plusOneOrReset(b);
    $('#port'+ String(a) ).toggleClass('hidden');
    $('#port'+ String(b)).toggleClass('hidden');
  };

  window.setInterval(function(){
    hideSlides();
  }, 5000);
  // hideSlides();


  //toggle portfolio
    $(function() {

      $('.img').each(function(n) {

        $(this).wrap('<figure class="tint t1"></figure>');
      });

    });

});

function toggleport(){
    $('#port-extended').toggleClass('hidden');
  };

