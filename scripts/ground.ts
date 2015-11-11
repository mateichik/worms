class Ground{

	public holes:Hole[] = [];
	public topLeftCorner:PositionPhysics;
	public width:number;
	public height: number;
	private image: HTMLElement;

	constructor(){
		this.topLeftCorner = new PositionPhysics();
		this.topLeftCorner.x = 0;
		this.topLeftCorner.y = 400;
		this.width = 100;
		this.height = 10;
		this.image = document.getElementById('ground');
		console.log(this.image);
	}

	draw(context: CanvasRenderingContext2D){
		context.drawImage(this.image, this.topLeftCorner.x, this.topLeftCorner.y, this.width, this.height);


	}

	containsPoint(x: number, y: number){
		var containsX = x > this.topLeftCorner.x && x < this.topLeftCorner.x + this.width;
		var containsY = y > this.topLeftCorner.y && y < this.topLeftCorner.y + this.height;
		
		return containsX && containsY;
	}

	makeHole(x:number, y:number, radius:number){
		
		var newHole:Hole = new Hole();
		newHole.center.x = x;
		newHole.center.y = y;
		newHole.radius = radius;

		this.holes.push(newHole);
	}
}