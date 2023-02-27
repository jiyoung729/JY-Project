$(function(){
	$(window).scroll(function(){
		// about
		var top1 = $(window).scrollTop()
		var aboutT = $('.about').offset().top
		// port1
		var portT = $('.port1').offset().top
		// sub
		var subT = $('.sub').offset().top
		// port2
		var port2T = $('.port2').offset().top
		// port3
		var port3T = $('.port3').offset().top

		if(top1 > aboutT-400) {
			$('.about').addClass('active');
		} else {
			$('.about').removeClass('active');
		}

		// port1
		if(top1 > portT-600) {
			$('.port1').addClass('active');
		} else {
			$('.port1').removeClass('active');
		}

		// sub
		if(top1 > subT-600) {
			$('.sub').addClass('active');
		} else {
			$('.sub').removeClass('active');
		}

		// port2
		if(top1 > port2T-600) {
			$('.port2').addClass('active');
		} else {
			$('.port2').removeClass('active');
		}

		// port3
		if(top1 > port3T-600) {
			$('.port3').addClass('active');
		} else {
			$('.port3').removeClass('active');
		}
	})

	$('.port3 .list').on('mouseenter focus', function(){
		$(this).addClass('over');
	})
	$('.port3 .list').on('mouseleave blur', function(){
		$(this).removeClass('over');
	})
	
})