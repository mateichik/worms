var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;
var engine = new Engine(context);
engine.startGame();
var onPaint = function () {
    engine.draw();
};
function requestAnimFrame() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
}
requestAnimFrame()(onPaint);
