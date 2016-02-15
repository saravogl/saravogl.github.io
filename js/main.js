// Back to top button //

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 700); // speed of transition //
	return false;
});


// Scroll to section //

$('.menu a').on('click', function(e) {
	e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// 'Contact me' to Say Hello Section //

$('.lets-dance a:last-of-type').on('click', function(e) {
	e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Fixed Scroll Menu //

var num = 300; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
