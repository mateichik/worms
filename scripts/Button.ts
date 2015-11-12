class Button{
	private text: string;
	private position: PositionPhysics;
	private width: number = 100;
	private height: number = 20;
	private defaultBackgroundColor: string = '#FF0000';
	private defaultTextColor: string = '#FFFFFF';

	constructor(text: string, position: PositionPhysics){
		this.text = text;
		this.position = position;
	}

	draw(context: CanvasRenderingContext2D) {

		context.beginPath();

		var topLeftCornerX = this.position.x - this.width / 2;
		var topLeftCornerY = this.position.y - this.height / 2;


		context.fillStyle = this.defaultBackgroundColor;
		context.fillRect(topLeftCornerX, topLeftCornerY, this.width, this.height);

		context.fillStyle = this.defaultTextColor;
		context.fillText(this.text, this.position.x, this.position.y);

		context.closePath();
		context.stroke();
	}
}