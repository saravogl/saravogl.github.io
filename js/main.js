// Scroll to top of page @ refresh //

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

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

// Lifework: On click of 'Say Hello' send to appropriate section //

$('.life-work .hello').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Lifework: On click of 'Come join me at a class' send to 'Let's Dance' section //

$('.life-work .dance').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Let's Dance: On click of 'Contact me' send to 'Say Hello' Section //

$('.lets-dance .hello').on('click', function(e) {
	e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Fixed Scroll Menu //

var navTop = $('.menu').offset().top;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > navTop) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

// Mobile Nav //

$('.hamburger').on('click', function () {
    if ($('.mobile-nav').hasClass('open')) {
        $('.mobile-nav').animate({
            right: -200
        }, function() {
            $(this).removeClass('open');
        });
    } else {
        $('.mobile-nav').animate({
            right: 0
        }, function() {
            $(this).addClass('open');
        });
    }    
});
