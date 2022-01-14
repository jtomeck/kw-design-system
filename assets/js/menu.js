$(document).ready(function(){
  $('.burger-button, .nav-overlay').click(function(){
    if( $('.navmenu').hasClass('closed') ){
      $('.navmenu').stop().animate({left: '0'},200);
    } else {
      $('.navmenu').stop().animate({left: '-16rem'},200);
    }
    $('.navmenu').toggleClass('closed shadow-2xl');
    $('.nav-overlay').toggleClass('hidden');
  });
});
