$(document).ready(function(){
  $('.burger').click(function(){
    if( $('.navmenu').hasClass('closed') ){
      $('.navmenu').removeClass('closed');
      $('.navmenu').animate({
        left: '0'
      }, "fast");
    } else {
      $('.navmenu').animate({
        left: '-16rem'
      }, "fast");
      $('.navmenu').addClass('closed');
    }
  });
});
