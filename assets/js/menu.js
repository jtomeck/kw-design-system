$(document).ready(function(){
  $('.burger-button, .nav-overlay').click(function(){
    if( $('.navmenu').hasClass('closed') ){
      $('.burger').addClass('open');
      $('.navmenu').stop().animate({left: '0'},200);
    } else {
      $('.burger').removeClass('open');
      $('.navmenu').stop().animate({left: '-16rem'},200);
    }
    $('.navmenu').toggleClass('closed shadow-2xl');
    $('.nav-overlay').toggleClass('hidden');
  });
});
