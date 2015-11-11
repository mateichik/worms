var Ground = (function () {
    function Ground() {
        this.holes = [];
        this.topLeftCorner = new PositionPhysics();
        this.topLeftCorner.x = 0;
        this.topLeftCorner.y = 400;
        this.width = 100;
        this.height = 10;
        this.image = document.getElementById('ground');
        console.log(this.image);
    }
    Ground.prototype.draw = function (context) {
        context.drawImage(this.image, this.topLeftCorner.x, this.topLeftCorner.y, this.width, this.height);
    };
    Ground.prototype.containsPoint = function (x, y) {
        var containsX = x > this.topLeftCorner.x && x < this.topLeftCorner.x + this.width;
        var containsY = y > this.topLeftCorner.y && y < this.topLeftCorner.y + this.height;
        return containsX && containsY;
    };
    Ground.prototype.makeHole = function (x, y, radius) {
        var newHole = new Hole();
        newHole.center.x = x;
        newHole.center.y = y;
        newHole.radius = radius;
        this.holes.push(newHole);
    };
    return Ground;
})();
