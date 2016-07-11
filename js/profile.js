(function(){
	$(function(){
		var d = ["top","right","bottom","left"];
		for (var i = 0; i < 8; i++) {
			var $item = $(".p-base li:first").clone();
			$item.find("dl").attr("animation","fadeIn-"+d[Math.floor(Math.random()*4)]);
			$item.appendTo($(".p-base"));
		}
		$(window).scroll(function(){
			checkAnimation();
		});
		
		
	});
	function checkAnimation(){
		$("[animation]").each(function(){
			var h = $(window).height();
			var st = $(document.body).scrollTop();
			var ot = $(this).offset().top ;
			if(ot < h+st){
				$(this).addClass($(this).attr("animation"));
			}
		});
	}
})();
