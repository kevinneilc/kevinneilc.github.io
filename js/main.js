  $('.hamburger-icon').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('nav').slideToggle();
  });

  $('.foodOne').on('click', function() {
    $('.start').slideToggle();
  });

  $('.foodTwo').on('click', function() {
    $('.mainTwo').slideToggle();
  });


  $('.foodThree').on('click', function(){
    $('.main').slideToggle();
  });

  $('.foodFour').on('click', function() {
    $('.dessert').slideToggle();
  });

  $('button').on('click', function() {
    $('form').slideToggle();
    $('.funny').fadeToggle();
  });

  $(window).on('scroll', function () {

  var distanceScrolled = $(document).scrollTop();

  console.log(distanceScrolled);


  if (distanceScrolled >= 574){
    $('.family').slideDown();
  } else {
      $('.family').slideUp();
  }

  if (distanceScrolled >= 1641){
    $('.menu').slideDown();
  } else {
      $('.menu').slideUp();
  }
  });

  showDiv1();

  function showDiv1(){
    $('#firstLine').fadeIn(1600);
    setTimeout(function(){
      $('#firstLine').hide();
      showDiv2()
  }, 5000);
  }

  function showDiv2(){
    $('#secondLine').fadeIn(1600);
    setTimeout(function(){
      $('#secondLine').hide(); showDiv1()
    }, 5000);
  }
