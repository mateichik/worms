var Physics = (function () {
    function Physics(ground) {
        this.ground = ground;
        this.physicsObjects = [];
    }
    Physics.prototype.addPhysicsObject = function (object) {
        this.physicsObjects.push(object);
    };
    Physics.prototype.computeTick = function () {
        for (var i = 0; i < this.physicsObjects.length; i += 1) {
            var currentObject = this.physicsObjects[i].position;
            if (this.ground.containsPoint(currentObject.x, currentObject.y) == false) {
                currentObject.x -= 1;
                currentObject.y -= 1;
            }
        }
    };
    return Physics;
})();
