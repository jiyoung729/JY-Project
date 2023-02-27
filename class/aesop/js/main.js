$(function(){
	// slide
	$('.visual-slide').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: true
	});

	// contents
	$(window).scroll(function(){
		var top1 = $(window).scrollTop();
		// brand-wrap
		var brand = $('.brand-txt').offset().top
		// news-wrap
		var newsW = $('.news-listbox').offset().top 
		// spa-wrap
		var spa = $('.spa-wrap').offset().top

		// brand-wrap
		if(top1 > brand-500) {
			$('.brand-txt').addClass('active');
		} else {
			$('.brand-txt').removeClass('active');
		}
		// news-wrap
		if(top1 > newsW-500) {
			$('.news-listbox').addClass('active');
		} else {
			$('.news-listbox').removeClass('active');
		}
		// spa
		if(top1 > spa-500) {
			$('.spa-txt').addClass('active');
		} else {
			$('.spa-txt').removeClass('active');
		}
	})

	// best-wrap
	$('.autoplay').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	$('.bp-list a').on('mouseenter focus', function(){
		$('.bp-list > a').removeClass('active');
		$(this).addClass('active');
	})
	$('.price-icon a').on('mouseenter focus', function(){
		$('.bp-list > a').removeClass('active');
		$(this).parents('div').siblings('a').addClass('active');
	})

	$('.bp-list, .price-icon a').on('mouseleave blur', function(){
		$('.bp-list > a').removeClass('active');
	})

	// cos-wrap
	$("#scroller").simplyScroll({frameRate:60});

	// ka-wrap
	$('.variable-width').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});

	$('.ka-list').on('mouseenter focus',function(){
		$(this).find($('.ka-txt')).addClass('active');
	})
	$('.ka-list').on('mouseleave blur', function(){
		$(this).find($('.ka-txt')).removeClass('active');
	})

	// insta-wrap
	$('.insta-img').on('mouseenter focus', function(){
		$(this).addClass('active');
	})
	$('.insta-img').on('mouseleave blur', function(){
		$(this).removeClass('active');
	})
})