var Engine = (function () {
    function Engine(viewportWidth, viewportHeight) {
        this.teams = [];
        this.teamMembersCount = 5;
        this.context = context;
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
    }
    Engine.prototype.startGame = function () {
        this.interface = new Interface();
        this.ground = new Ground();
        this.physics = new Physics(this.ground);
        this.createTeams(1);
    };
    Engine.prototype.createTeams = function (count) {
        this.teams = [];
        for (var i = 0; i < count; i += 1) {
            this.teams.push(this.createTeam());
        }
    };
    Engine.prototype.createTeam = function () {
        var teamAreaStart = new PositionPhysics();
        teamAreaStart.x = 0;
        teamAreaStart.y = 0;
        var teamAreaEnd = new PositionPhysics();
        teamAreaEnd.x = this.viewportWidth;
        teamAreaEnd.y = this.viewportHeight;
        var newTeam = new Team(teamAreaStart, teamAreaEnd, this.teamMembersCount);
        newTeam.enablePhysics(this.physics);
        return newTeam;
    };
    Engine.prototype.draw = function (context) {
        if (this.ground !== null &&
            this.physics != null) {
            this.physics.computeTick();
            this.ground.draw(context);
            this.drawTeams(context);
            this.interface.draw(context);
        }
    };
    Engine.prototype.drawTeams = function (context) {
        for (var i = 0; i < this.teams.length; i += 1) {
            this.teams[i].draw(context);
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
