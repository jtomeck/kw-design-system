$(document).ready(function(){
  $('.burger').click(function(){
    if( $('.navmenu').hasClass('-left-64') ){
      $('.navmenu').removeClass('-left-64');
      $('.navmenu').addClass('left-0');
    } else {
      $('.navmenu').removeClass('left-0');
      $('.navmenu').addClass('-left-64');
    }
  });
});
