$( document ).ready(function() {
console.log('test');
});

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;
    console.log(position);

	$("body, html").animate({
		scrollTop: position
	},1000);
});