$(function(){
	$(window).scroll(function(){
		var winT = $(window).scrollTop();
		// ab-m
		var abTop = $('.ab-wrap').offset().top

		// tab
		if(winT > top2) {
			$('.tabmenu').addClass('over');
		} else {
			$('.tabmenu').removeClass('over');
		}
		// ab-m
		if(winT > abTop-500) {
			$('.ab-wrap > figure').addClass('active');
			$('.ab-text').addClass('active');
		} else {
			$('.ab-wrap > figure').removeClass('active');
			$('.ab-text').removeClass('active');
		}
	});

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
})