$(function(){
	var browserW = $(window).width();
	// console.log(browserW);

	if(browserW > 1180){
		$('.main, .bg').on('mouseenter focus', function(){
			$('.submenu').stop().slideDown();
			$('.bg').stop().slideDown();
		});
		$('.main, .bg').on('mouseleave blur', function(){
			$('.submenu').stop().slideUp();
			$('.bg').stop().slideUp();
		});
	}

	$('nav+span').on('click',function(){
		$('nav').addClass('on');
		$('.ht-right').addClass('on');
	});
	$('.close').on('click',function(){
		$('nav').removeClass('on');
		$('.ht-right').removeClass('on');
	});

	$('.main').on('click', function(){
		$('.main').not(this).removeClass('on');
		$(this).addClass('on');
	});

	$(window).resize(function(){
		var browserW = $(window).width();
		// console.log(browserW);

		if(browserW > 1180){
			$('.main, .bg').on('mouseenter focus', function(){
				$('.submenu').stop().slideDown();
				$('.bg').stop().slideDown();
			});
			$('.main, .bg').on('mouseleave blur', function(){
				$('.submenu').stop().slideUp();
				$('.bg').stop().slideUp();
			});

			$('.main').removeClass('on');
			$('nav').removeClass('on');
			$('.ht-right').removeClass('on');

		} else if(browserW <= 1180){
			$('.main, .bg').off('mouseenter');
			$('.main, .bg').off('mouseleave');
			$('.submenu').removeAttr('style');

			$('.main').on('click', function(){
				$('.main').not(this).removeClass('on');
				$(this).addClass('on');
			});
		}

	});

	$(window).scroll(function(){
		var browserT = $(window).scrollTop();
		// console.log(browserT);
		$('header').addClass('on');
		if(browserT == 0) {
			$('header').removeClass('on');
		}
	});

});