$(document).ready(function(){
  $('#menuToggle').click(function(event){
    event.preventDefault();
    $('#menu').toggleClass('toggled');
  });
});
