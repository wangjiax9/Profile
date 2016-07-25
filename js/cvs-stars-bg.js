~(function(){
	var cvs = document.getElementById("cvStarsBg");
		var ctx = cvs.getContext("2d");
		var cw = cvs.width = window.innerWidth;
		var ch = cvs.height = window.innerHeight;
		var stars = [];
		
		var stepdeg = 0;
		function createSky(){
			for (var i = 0; i < 2000; i++) {
				var radius = Math.random()*1.2;
				var x = parseInt(Math.random()*cw);
				var y = parseInt(Math.random()*ch);
				var color = "hsl("+parseInt(Math.random()*360)+",30%,70%)";
				stars.push({
					radius:radius,
					color:color,
					x:x,
					y:y
				});
			}
		}
		createSky();
		function wriggle(){ 
			stepdeg += 1;
			ctx.clearRect(0,0,cw,ch);
			for (var i = 0; i < stars.length; i++) {
				var cx = Math.cos(Math.PI*stepdeg/180)*4;
				var cy = Math.sin(Math.PI*stepdeg/180)*4;
				ctx.beginPath();
				ctx.arc(stars[i].x+cx,stars[i].y+cy,stars[i].radius,0,360); 
				ctx.fillStyle = stars[i].color;
				ctx.closePath(); 
				ctx.fill();
			}
//			requestId = window.requestAnimationFrame(wriggle);
		}
		wriggle();
//		requestId = window.requestAnimationFrame(wriggle);
})();
