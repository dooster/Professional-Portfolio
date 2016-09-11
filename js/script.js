/*$('.selector').hover(function(){
	$(this).css('color', '#fddbd1');
}, function() {
	$(this).css('color', 'white');
});

/*$('#writer').click(function(event){
	$('#slayer, #developer').toggleClass('strike');
});

$('#slayer').click(function(event){
	$('#writer, #developer').toggleClass('strike');
});

$('#developer').click(function(event){
	$('#slayer, #writer').toggleClass('strike');
});*/

/*$('.selector').hover(function(){
	$('.selector').not(this).each(function() {
		$(this).css('text-decoration', 'line-through');
	});
}, function() {
	$('.selector').not(this).each(function() {
		$(this).css('text-decoration', 'none');
	});
});*/

/*$('#writer').click(function(event){
	$('.section').toggle('medium');
});*/
/*
$('.selector').hover(function(){
    // Cleanup / Reset to default position
    $('.selector').removeClass('clicked');
    $('.selector').css('text-decoration', 'none');
    $('.selector').css('color', '#fddbd1');

    $('.selector').not(this).each(function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'white');
    });
}, function() {
    if(!$(this).hasClass('clicked'))
    {
        $('.selector').not(this).each(function() {
            $(this).css('text-decoration', 'none');
            $(this).css('color', 'white');
        });
    }
});
$('.selector').click(function(evt) {
    $('.selector').not(this).each(function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'white');
   });
   $(this).addClass('clicked');
});
$('body').click(function(evt) {
    if(!$(evt.target).hasClass('clicked')) {
        $('.selector').css('text-decoration', 'none');
        $('.selector').css('color', 'white');
   }
});*/