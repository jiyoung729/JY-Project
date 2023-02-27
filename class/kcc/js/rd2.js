$(function(){
	// cd-imgbox
	var $win =$(window);
	var $ro = $('.cd-imgbox > img');

	$win.on('scroll', function(){
		var top = $win.scrollTop()/ 2;
		$ro.css('transform','rotate('+ top +'deg)')
		// console.log('Amazing Scrolling!')

	// 	var top2 = $(window).scrollTop();
	// 	// cd-listbox
	// 	var list = $('.cd-listbox').offset().top
	// 	// cd-act
	// 	var cdTop = $('.cd-act').offset().top

	// 	// cd-listbox
	// 	if(top2 > list-700) {
	// 		$('.cd-listbox').addClass('active');
	// 	} else {
	// 		$('.cd-listbox').removeClass('active');
	// 	}
	// 	// cd-act
	// 	if(top3 > cdTop-70) {
	// 		$('.act-box').addClass('active');
	// 	} else {
	// 		$('.act-box').removeClass('active');
	// 	}
	// })

	// $(window).scroll(function(){
	// 	var top2 = $(window).scrollTop();
	// 	// cd-listbox
	// 	var list = $('.cd-listbox').offset().top
	// 	// cd-act
	// 	var cdTop = $('.cd-act').offset().top

	// 	// cd-listbox
	// 	if(top2 > list-700) {
	// 		$('.cd-listbox').addClass('active');
	// 	} else {
	// 		$('.cd-listbox').removeClass('active');
	// 	}
	// 	// cd-act
	// 	if(top2 > cdTop-70) {
	// 		$('.act-box').addClass('active');
	// 	} else {
	// 		$('.act-box').removeClass('active');
	// 	}
	// })
})