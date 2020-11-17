$(document).ready(function(){
  // smooth scroll biar mulus
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // behavior
      event.preventDefault();

      var hash = this.hash;

      // pake jquery
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
//kasih hash biar GG

        window.location.hash = hash;
      });
    } 
  });
});

//button show div byID


$('#btn1').on('click', function(e){
  $("#bawah").toggle();
  $('#btn1').toggle();
  $(this).toggleClass('btn1')
});

$('#btn2').on('click', function(e){
  $("#kanan").toggle();
  $('#btn2').toggle();
  $(this).toggleClass('btn2')
});