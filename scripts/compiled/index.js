var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;
var engine = new Engine(canvas.width, canvas.height);
engine.startGame();
function requestAnimFrame() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
}
var animationFunction = requestAnimFrame();
var onPaint = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    engine.draw(context);
    animationFunction(onPaint);
};
animationFunction(onPaint);
