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


// When user clicks reservations button
  // Form slide left onto page
  // Form is a different color from the rest of the page
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
// When user scrolls on words "aming kwento"
  // slide down section "our story"


// When user clicks nav (hamburger)
  // nav menu slides down vertically
  // when use clicks hamuberger, should toggle

// When user clicks food icons
  //sections corresponding to icon slide down below food
  //menu items should toggle

// Every 4 seconds transition p2
 //the transition p1
//  var quoteNumber = 0
//
//  setInterval(function() {
//    if (quoteNumber < 1) {
//      quoteNumber += 1;
//    } else{
//      quoteNumber = 0;
//    }
//
//   $('.quote').hide();
//   // $('p').next(".quote").fadeIn(200);
//   $('.quote').eq(quoteNumber).fadeIn();
//   console.log(quoteNumber);
//
// }, 4000);

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
