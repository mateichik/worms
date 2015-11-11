var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm(position) {
        _super.call(this);
        this.position = position;
        this.health = 100;
        this.angleDegrees = 0;
    }
    Worm.prototype.draw = function () {
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
