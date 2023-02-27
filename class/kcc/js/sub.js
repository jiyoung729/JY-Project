$(function(){
	$('.tabmenu > span').on('click' ,function(){
		$('.tabmenu > ul').toggleClass('over');
		$(this).toggleClass('over');
	})

	$(window).scroll(function(){
		var top1 = $(window).scrollTop(); // 스크롤바의 상단위치, 현재 스크롤바의 위치를 가져옴
		var top2 = $('.content').offset().top; // 문서 기준으로 위

		if(top1 > top2-300) { // window스크롤 값이 content보다 클때
			$('.tabmenu').addClass('over');
		} else {
			$('.tabmenu').removeClass('over');
		}
		
	});
})