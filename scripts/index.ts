var canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
var context = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

var engine = new Engine(context);
engine.startGame();

var onPaint = function(){
	engine.draw();
}



function requestAnimFrame() {

	return window.requestAnimationFrame || (<any>window).webkitRequestAnimationFrame || (<any>window).mozRequestAnimationFrame || (<any>window).oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback: () => any ){
		window.setTimeout(callback, 1000/60);
	}
}

requestAnimFrame()(onPaint);