!(function(){
	var cvs = document.getElementById("cvsBg");
	var ctx = cvs.getContext("2d");
	var cw = cvs.width = $(window).width();
	var ch = cvs.height = $(window).height();
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var raf;
	var particales = [];
	var speed1 = 1;
	var speed2 = 2;
	var collision = false;
	
	function buildData() {
		for (var w = 0; w < 5; w++) {
			for (var h = 0; h < 10; h++) {
				var x = 10+Math.floor(Math.random()*(cw-20));
				var y = 10+Math.floor(Math.random()*(ch-20));
				var color = "hsl("+parseInt(Math.random()*220)+",50%,70%)";
				var radius = Math.random()*2+0.5;
				var particale = new Particale(x, y, radius, color);
				particales.push(particale);
			}
		}
	}
	function Particale(x, y, r, color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.angle = Math.random()*Math.PI*2;
		this.vx = speed1*Math.cos(this.angle);
		this.vy = speed1*Math.sin(this.angle);
	}
	Particale.prototype.currentSpeed = function(){
		return Math.sqrt(this.vx*this.vx + this.vy*this.vy);
	}
	Particale.prototype.currentAngle = function(){
		return Math.atan2(this.vy, this.vx);
	}
	Particale.prototype.update = function(){
		if(this.x - this.r < 0 || this.x + this.r > cw){
			this.vx *= -1;
		}else if(this.y - this.r < 0 || this.y + this.r > ch){
			this.vy *= -1;
		}
		if(!collision){
			var vc = {
				s : this.currentSpeed(),
				a : this.currentAngle()
			};
			if(speed1 < vc.s){
				this.vx -= Math.cos(vc.a) * (vc.s - speed1) * .1;
				this.vy -= Math.sin(vc.a) * (vc.s - speed1) * .1;
			}
		}
		this.x += this.vx;
		this.y += this.vy;
	}
	function checkDistance(){
		for (var i = 0; i < particales.length-1; i++) {
			var lineNum = 0;
			for (var j = i+1; j < particales.length; j++) {
				var p0 = particales[i];
				var p1 = particales[j];
				var pd = (p1.x - p0.x) * (p1.x - p0.x) + (p1.y - p0.y) * (p1.y - p0.y);
				var pAngel = Math.atan2(p1.y - p0.y, p1.x - p0.x);
				if(pd < 4000 && lineNum < 1){
					ctx.beginPath();
					ctx.strokeStyle = "hsl("+parseInt(Math.random()*220)+",30%,20%)";
					ctx.moveTo(p0.x,p0.y);
					ctx.lineTo(p1.x,p1.y);
					ctx.stroke();
					ctx.closePath();
					lineNum ++;
				}
				if(pd < (p0.r + p1.r)*(p0.r + p1.r)){
					collision = true;
					p0.vx = -Math.cos(pAngel) * speed2;
					p0.vy = -Math.sin(pAngel) * speed2;
					p1.vx = Math.cos(pAngel) * speed2;
					p1.vy = Math.sin(pAngel) * speed2;
				}else{
					collision = false;
				}
			}
		}
	}
	function draw(){
		checkDistance();
		for (var i = 0; i < particales.length; i++) {
			var p = particales[i];
			p.update();
			ctx.beginPath();
			ctx.fillStyle = p.color;
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
			ctx.fill();
			ctx.closePath();
		}
	}
	function gan(){
		ctx.clearRect(0,0,cw,ch);
		draw();
		requestAnimationFrame(gan);
	}
	buildData();
	requestAnimationFrame(gan);
})();
