$(function(){
		  $('a[href^="#"]').on('click', function(event) {
		    // отменяем стандартное действие
		    event.preventDefault();
		    
		    var sc = $(this).attr("href"),
		        dn = $(sc).offset().top;
		    /*
		    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
		    * dn - определяем положение блока на странице
		    */
		    
		    $('html, body').animate({scrollTop: dn}, 500);
		    
		    /*
		    * 1000 скорость перехода в миллисекундах
		    */
		  });
		});

$(document).ready(function() {

	$('.close').on('click', function () {
		$('.overlay-two').hide();
		location.reload();
	});

	$('.open').on('click', function(event) {
		event.preventDefault();
		$('.overlay').show();
	});

	  $('.form').submit(function( event ){
	    event.preventDefault();
	    $('.overlay').hide();
	    $('.overlay-two').show();
	 });
});

