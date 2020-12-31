$(document).ready(function(){
  $('.burger').click(function(){
    if( $('.navmenu').hasClass('-left-64') ){
      $('.navmenu').removeClass('-left-64');
      $('.navmenu').addClass('left-0 shadow-2xl');
    } else {
      $('.navmenu').removeClass('left-0 shadow-2xl');
      $('.navmenu').addClass('-left-64');
    }
  });
});
