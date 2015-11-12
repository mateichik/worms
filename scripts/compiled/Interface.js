var Interface = (function () {
    function Interface() {
        this.buttons = [];
        var nextButtonPosition = new PositionPhysics();
        nextButtonPosition.x = 20;
        nextButtonPosition.y = 20;
        var nextButton = new Button('Next', nextButtonPosition);
        this.buttons.push(nextButton);
    }
    Interface.prototype.draw = function (context) {
        for (var i = 0; i < this.buttons.length; i += 1) {
            this.buttons[i].draw(context);
        }
    };
    return Interface;
})();
