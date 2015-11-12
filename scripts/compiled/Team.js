var Team = (function () {
    function Team(areaStart, areaEnd, membersCount) {
        if (membersCount === void 0) { membersCount = 0; }
        this.members = [];
        this.areaStart = areaStart;
        this.areaEnd = areaEnd;
        this.generateMembers(membersCount);
    }
    Team.prototype.generateMembers = function (count) {
        this.members = [];
        for (var i = 0; i < count; i += 1) {
            this.members.push(new Worm(this.areaStart, this.areaEnd));
        }
    };
    Team.prototype.addMember = function (newMember) {
        this.members.push(newMember);
    };
    Team.prototype.draw = function (context) {
        for (var i = 0; i < this.members.length; i += 1) {
            this.members[i].draw(context);
        }
    };
    Team.prototype.enablePhysics = function (physics) {
        for (var i = 0; i < this.members.length; i += 1) {
            physics.addPhysicsObject(this.members[i]);
        }
    };
    return Team;
})();
