(function(){
	$(function(){
		$(window).scroll(function(){
			checkAnimation();
		});
	});
	function checkAnimation(){
		$("[data-animation]").each(function(){
			var h = $(window).height();
			var st = $(document.body).scrollTop();
			var ot = $(this).offset().top ;
			if(ot < h+st){
				$(this).addClass($(this).data("animation"));
			}
		});
		$("[data-delay]").each(function(){
			var delay = $(this).data("delay");
			$(this).css("animation-delay",delay);
		});
	}
	
})();
