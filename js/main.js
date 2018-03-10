$( document ).ready(function() {
console.log('test');


$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;
    console.log(position);

	$("body, html").animate({
		scrollTop: position
	},1000);
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#main-nav").addClass('white')&&$('.query').addClass('after');   
    }else{
        $("#main-nav").removeClass('white')&&$('.query').removeClass('after');
    }
});
    
    });