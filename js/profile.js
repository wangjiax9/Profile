(function(){
	$(function(){
		var d = ["top","right","bottom","left"];
		for (var i = 0; i < 8; i++) {
			var $item = $("#baseInfo li:first").clone();
			$item.find("dl").data("animation","fadeIn-"+d[Math.floor(Math.random()*4)]);
			$item.appendTo($("#baseInfo"));
		}
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
