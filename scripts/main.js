  //nav animation
  window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animate');
  });

  //main carrousel
  $(document).ready(function() {
    $('.carousel').carousel();
  });
  
  //navbar toggle
  (function(){
    $('#msbo').on('click', function(){
      $('body').toggleClass('msb-x');
    });
  }());

  //bubble animation//
  const spans = document.querySelectorAll('.random-value');

  spans.forEach(span => {
    const randomValue = Math.floor(Math.random() * 50) + 1;
    span.style.setProperty('--i', randomValue);
  });