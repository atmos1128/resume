// $(window).scroll(function(evt){
//   if($(window).scrollTop()>0){
//     $("header").removeClass("at_top");
//   }else{
//     $("header").addClass("at_top");
//   }   
// });

$(window).scroll(function() {
  if($(window).scrollTop() >= $('#skill').offset().top){
    $('#bar-1').delay(1000).css('width', '80%');
    $('#bar-2').delay(1000).css('width', '75%');
    $('#bar-3').delay(1000).css('width', '70%');
    $('#bar-4').delay(1000).css('width', '65%');
    $('#bar-5').delay(1000).css('width', '70%');
    $('#bar-6').delay(1000).css('width', '65%');
    $('#bar-7').delay(1000).css('width', '50%');
  }
});

$(function(){
	$('#topBtn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#topBtn').fadeIn(222);
		} else {
			$('#topBtn').stop().fadeOut(222);
		}
	}).scroll();
});
var s = skrollr.init();

$(document).ready(function() {
	$('#hamburger').on('click', function(event) {
		event.preventDefault();
		$('.header_right').toggleClass('menu-show');
	});

});



