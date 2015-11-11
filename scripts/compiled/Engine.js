var Engine = (function () {
    function Engine(context) {
        this.teams = [];
        this.context = context;
    }
    Engine.prototype.startGame = function () {
        this.ground = new Ground();
        this.physics = new Physics(this.ground);
        this.createTeams();
    };
    Engine.prototype.createTeams = function () {
    };
    Engine.prototype.draw = function () {
        if (this.ground !== null &&
            this.physics != null) {
            this.physics.computeTick();
            this.ground.draw(this.context);
        }
    };
    Engine.prototype.isGameStopped = function () {
        if (this.teams.length <= 0) {
            return true;
        }
        for (var i = 0; i < this.teams.length; i += 1) {
            if (this.teams[i].members.length <= 0) {
                return true;
            }
        }
        return false;
    };
    Engine.prototype.startTurn = function () {
    };
    Engine.prototype.endTurn = function () {
    };
    return Engine;
})();
