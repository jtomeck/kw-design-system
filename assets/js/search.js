
$(document).ready(function(){

    $('#search-input').on('input', function() {
        if ($(this).val()) {
            $('.search-overlay').removeClass('hidden');
            $('#results-container').removeClass('hidden');
        }else{
            $('.search-overlay').addClass('hidden');
            $('#results-container').addClass('hidden');
        }
    });

    /*$('.search').focusin(function(){
        if($('#search-input').val()) {
            $('.search-overlay').removeClass('hidden');
        }
    });
    $('.search').focusout(function(){
        if(!$('#search-input').val()){
            $('.search-overlay').addClass('hidden');
        }
    });*/
})
