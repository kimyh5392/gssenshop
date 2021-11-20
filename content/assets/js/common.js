// header scroll 관련
$(window).on('scroll', function() {
	if ($(this).scrollTop() > 0) {
		$('body').addClass('scrolled');
	} else {
		$('body').removeClass('scrolled');
	}
});

// nav 관련
$(document).on('click', '#header .btn-nav', function(){
	$('body').addClass('nav-opened');
});
$(document).on('click', '#nav .btn-nav-close, #nav .backdrop', function(){
	$('body').removeClass('nav-opened');
});

// search 관련
$(document).on('click', '.search-area .btn-search-open', function(){
	$('.search-area').addClass('show');
});
$(document).on('click', '.search-area .btn-cancel', function(){
	$('.search-area').removeClass('show');
});

// pc menu hover 관련
$(document).on('mouseenter', '.category > ul > li > a', function(){
	$('.category > ul > li').removeClass('active');
	$(this).parent().addClass('active');
});
$(document).on('mouseleave', '.category > ul > li', function(){
	$('.category > ul > li').removeClass('active');
});