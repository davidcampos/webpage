$('.nav li a').on('click', function() {
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().addClass('active');
});

$('.navbar-brand').on('click', function() {
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().parent().find('#nav-home').addClass('active');
});

$('#year').html((new Date()).getFullYear());

$(function () {
        $("[data-toggle='tooltip']").tooltip();
});

// Animated Scrolls
$('#nav-home').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#home").offset().top
	}, 500);
});
$('.navbar-brand').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#home").offset().top
	}, 500);
});
$('#nav-tools').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#tools").offset().top
	}, 500);
});
$('#nav-projects').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#projects").offset().top
	}, 500);
});
$('#nav-publications').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#publications").offset().top
	}, 500);
});
$('#nav-about').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#about").offset().top
	}, 500);
});

// Logo smile
$('.navbar-brand').mouseover(function(){
	$('.face').css('opacity', '1');
});
$('.navbar-brand').mouseout(function(){
	$('.face').css('opacity', '0');
});

// Publications toggles
/*var index = 1;
$('.publication-list-toggle').click(function(e) {
    if ($(this).attr('data-show') == '0'){
    	// $(this).text('Hide');
    	$(this).html('<i class="icon-collapse-top"></i> Hide');
    	$(this).attr('data-show', '1');
	    var list = $(this).parent().find('div.list ul');
	    $(list).each(function() {
	  		$(this).children('li:gt('+(index)+')').css('visibility', 'visible');
	  		$(this).children('li:gt('+(index)+')').css('opacity', '1');
	  		// $(this).children('li:gt('+(index)+')').show();
	  		$(this).children('li:gt('+(index)+')').css('height', 'auto');
	  		$(this).children('li:gt('+(index)+')').css('padding', '8px 0px 8px 23px');
		});
    } else {
    	// $(this).text('Show');
    	$(this).html('<i class="icon-collapse"></i> Show more');
    	$(this).attr('data-show', '0');
	    var list = $(this).parent().find('div.list ul');
	    $(list).each(function() {
			$(this).children('li:gt('+(index)+')').css('visibility', 'hidden');
	  		$(this).children('li:gt('+(index)+')').css('opacity', '0');
	  		// $(this).children('li:gt('+(index)+')').hide();
	  		
	  		$(this).children('li:gt('+(index)+')').css('height', '0');
	  		$(this).children('li:gt('+(index)+')').css('overflow', 'hidden');
	  		$(this).children('li:gt('+(index)+')').css('padding', '0px 0px 0px 23px');
		});
    }
});

$('.publication-list-toggle').click();*/