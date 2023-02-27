$(function(){
	$('.mainmenu, .bg').on('mouseenter focus', function(){
		$('.submenu').stop().slideDown();
		$('.bg').stop().slideDown();
	})
	$('.mainmenu, .bg').on('mouseleave blur', function(){
		$('.submenu').stop().slideUp();
		$('.bg').stop().slideUp();
	})

	$(window).scroll(function(){
		var browserT = $(window).scrollTop();
		// console.log(browserT);
		$('header').addClass('on');
		if(browserT == 0) {
			$('header').removeClass('on');
		}
	});
})