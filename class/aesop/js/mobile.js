$(function(){
	// navi
	$('.h-btn').on('click', function(){
		$('.h-btn').toggleClass('active');
		$('.navi').toggleClass('on');
	})

	$('.mainmenu > a').on('click', function(){
		$(this).toggleClass('on');
	})

	// slide
	$('.visual-slide').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: true
	});

	// best-wrap
	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	});

	// cos-wrap
	$("#scroller").simplyScroll({frameRate:60});

	// news-wrap
	function isElementUnderBottom(elem, triggerDiff) {
	  const { top } = elem.getBoundingClientRect();
	  const { innerHeight } = window;
	  return top > innerHeight + (triggerDiff || 0);
	}

	function handleScroll() {
	  const elems = document.querySelectorAll('.up-on-scroll');
	  elems.forEach(elem => {
	    if (isElementUnderBottom(elem, -20)) {
	      elem.style.opacity = "0";
	      elem.style.transform = 'translateY(70px)';
	    } else {
	      elem.style.opacity = "1";
	      elem.style.transform = 'translateY(0px)';
	    }
	  })
	}

	window.addEventListener('scroll', handleScroll);

	// spa-wrap
	$(window).scroll(function(){
		var top2 = $(window).scrollTop();
		var spaT = $('.spa-box').offset().top

		if(top2 > spaT-500) {
			$('.spa-txt').addClass('active');
		} else {
			$('.spa-txt').removeClass('active');
		}
	})

	// story-wrap
	$('.variable-width').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});

	// insta-wrap
	$('.center').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
})