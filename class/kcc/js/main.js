$(function(){
	// slick
	$('.visual-slide').slick({
		dots: true, 
		dotsClass: 'slide-dots',
		autoplay: true,
		fade: true
	});

	// about-box1
	$(window).scroll(function(){
		var top1 = $(window).scrollTop()
		// about-box1
		var aboutT = $('.text-box').offset().top
		// about-box2
		var abTop = $('.about-box2').offset().top 
		// rd-wrap
		var rdTop = $('.rd-wrap').offset().top 
		// sc-wrap
		var scwrapTop = $('.sc-wrap').offset().top 
		// re-wrap
		var rewrapTop = $('.re-wrap').offset().top 

		// about-box1
		if(top1 > aboutT-500) {
			$('.text-box > div').addClass('active');
		} else {
			$('.text-box > div').removeClass('active');
		}

		// about-box2
		if(top1 > abTop-900) {
			$('.fir-iconbox').addClass('on');
		} else {
			$('.fir-iconbox').removeClass('on');
		}

		// rd-wrap
		if(top1 > rdTop-300) {
			$('.rd-box').addClass('active');
		} else {
			$('.rd-box').removeClass('active');
		}

		// sc-wrap
		if(top1 > scwrapTop-150){
			$('.sc-box').addClass('active');
		} else {
			$('.sc-box').removeClass('active');
		}

		// re-wrap
		if(top1 > rewrapTop-150) {
			$('.re-listbox > ul').addClass('active');
		} else {
			$('.re-listbox > ul').removeClass('active');
		}
	})

	// ba-wrap
	$('.ba-imgbox li').on('click', function(){
		$('.ba-imgbox li').removeClass('tab-on');
		$(this).addClass('tab-on');

		$('.ba-box').hide();
		
		$('.ba-box').removeClass('active');
		 
		var idx = $('.ba-imgbox li').index(this);

		$('.ba-box').eq(idx).show();
		$('.ba-box').eq(idx).addClass('active');
		
	})

	// ks-wrap
	$('.ks-inner a').on('mouseenter focus',function(){
		$(this).addClass('active');
	})
	$('.ks-inner a').on('mouseleave blur', function(){
		$('.ks-inner a').removeClass('active');
	})
})