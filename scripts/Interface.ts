class Interface{
	private buttons: Button[] = [];

	constructor(){

		var nextButtonPosition: PositionPhysics = new PositionPhysics();
		nextButtonPosition.x = 20;
		nextButtonPosition.y = 20;
		var nextButton: Button = new Button('Next', nextButtonPosition);

		this.buttons.push(nextButton);
	}

	draw(context: CanvasRenderingContext2D) {

		for (var i = 0; i < this.buttons.length; i+=1){
			this.buttons[i].draw(context);
		}
	}
}