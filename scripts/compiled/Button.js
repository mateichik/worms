var Button = (function () {
    function Button(text, position) {
        this.width = 100;
        this.height = 20;
        this.defaultBackgroundColor = '#FF0000';
        this.defaultTextColor = '#FFFFFF';
        this.text = text;
        this.position = position;
    }
    Button.prototype.draw = function (context) {
        context.beginPath();
        var topLeftCornerX = this.position.x - this.width / 2;
        var topLeftCornerY = this.position.y - this.height / 2;
        context.fillStyle = this.defaultBackgroundColor;
        context.fillRect(topLeftCornerX, topLeftCornerY, this.width, this.height);
        context.fillStyle = this.defaultTextColor;
        context.fillText(this.text, this.position.x, this.position.y);
        context.closePath();
        context.stroke();
    };
    return Button;
})();
