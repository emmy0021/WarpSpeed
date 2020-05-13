var w = window.innerWidth;
var h = window.innerHeight;
var centerX = w / 2;
var centerY = h / 2;
let numStars = 200;
var warpSpeed = false;

var biggestSize = 1.5;//2

var canvas = document.getElementById("myCanvas");
canvas.width = w;
canvas.height = h;

var c = canvas.getContext("2d");




/* */
window.addEventListener('resize', function () {
	w = window.innerWidth;
	h = window.innerHeight;
	centerX = w / 2;
	centerY = h / 2;
	resize();
});

function resize() {
	canvas.width = w;
	canvas.height = h;

}

function Star() {
	var radius = Math.random() * biggestSize;
	var speedMult = .01;
	var x = (w * .05) + Math.random() * (w * .9);
	// if(x < centerX - 15 || x > centerX+15){
	// 	x+= Math.random()*30;
	// }

	var y = (h * .05) + Math.random() * (h * .9);
	// if(y < centerY - 15 || y > centerY+15){
	// 	y+= Math.random()*30;
	// }

	var dx = (x - centerX) * speedMult;
	var dy = (y - centerY) * speedMult;




	var dr = .0;

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.dr = dr;






	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		c.strokeStyle = 'white';
		c.stroke();
		c.fillStyle = 'white';
		c.fill();
	}

	this.update = function () {
		if (this.x - this.radius < 0 || this.x + this.radius > w || this.y - this.radius < 0 || this.y + this.radius > h) {
			var radius = Math.random() * biggestSize;
			var speedMult = .02;
			var x = (w * .05) + Math.random() * (w * .9);
			var y = (h * .05) + Math.random() * (h * .9);
			var dx = (x - centerX) * speedMult;
			var dy = (y - centerY) * speedMult;



			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
			this.radius = radius;
		}



		this.x += this.dx;
		this.y += this.dy;
		this.dx*= 1.01;
		this.dy*= 1.01;
		this.radius += this.dr;
		this.draw();
	}


}

var stars = [];
var starCount = 0;
while (starCount <= numStars) {
	stars.push(new Star());
	starCount++;
}




function animate() {
	requestAnimationFrame(animate);
	if(!warpSpeed){
		c.clearRect(0, 0, w, h);
	}
	

	for (var i = 0; i < numStars + 1; i++) { ////////////////////////////////////////
		stars[i].update()
	}


}

animate();

document.onmousedown = function(){
	warpSpeed = true;
}
document.onmouseup = function(){
	warpSpeed = false;
}


/* */