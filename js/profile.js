(function(){
	$(function(){
		$(window).scroll(function(){
			checkAnimation();
		});
//		$("#myPortrait").on("touchmove",function(e){
//			var touch = e.originalEvent.targetTouches[0];
//			var w = $(window).width();
//			var md = touch.pageX - (w/2);
//			console.log(md);
//			if(Math.abs(md) < (w/2)){
//				var cp = parseInt($("#myPortrait").css("background-position-x").replace("%",""));
//				console.log(md/100+cp);
//				$("#myPortrait").css("background-position-x",(md/100+cp)+"%");
//			}
//		});
	});
	function checkAnimation(){
		$("[data-animation]").each(function(){
//			$(this).removeAttr("data-animation");
			var h = $(window).height();
			var st = $(document.body).scrollTop();
			var ot = $(this).offset().top ;
			if(ot < h+st){
				$(this).addClass($(this).data("animation"));
			}
		});
		$("[data-delay]").each(function(){
//			$(this).removeData("delay");
			var delay = $(this).data("delay");
			$(this).css("animation-delay",delay);
		});
	}
	
})();
