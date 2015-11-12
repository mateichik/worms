var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm(areaStart, areaEnd) {
        _super.call(this);
        this.spriteWidth = 20;
        this.spriteHeight = 20;
        this.position = new PositionPhysics();
        this.position.x = this.getRandomInt(areaStart.x, areaEnd.x);
        this.position.y = this.getRandomInt(areaStart.y, areaEnd.y);
        this.health = 100;
        this.angleDegrees = 0;
    }
    Worm.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Worm.prototype.draw = function (context) {
        var topLeftCornerX = this.position.x - this.spriteWidth / 2;
        var topLeftCornerY = this.position.y - this.spriteHeight / 2;
        context.beginPath();
        context.rect(topLeftCornerX, topLeftCornerY, this.spriteWidth, this.spriteHeight);
        context.closePath();
        context.stroke();
    };
    Worm.prototype.move = function (newPosition) {
    };
    Worm.prototype.startAim = function () {
    };
    Worm.prototype.stopAim = function () {
    };
    Worm.prototype.die = function () {
    };
    Worm.prototype.jump = function () {
    };
    Worm.prototype.startFire = function () {
    };
    Worm.prototype.stopFire = function () {
        this.weapon.fire(this.position, this.angleDegrees, this.power);
    };
    return Worm;
})(PhysicsObject);
