class Worm extends PhysicsObject{

	public weapon:Weapon;
	public health:number;
	public angleDegrees:number;
	public power:number;
	public position: PositionPhysics;
	private spriteWidth: number = 20;
	private spriteHeight: number = 20;

	constructor(areaStart: PositionPhysics, areaEnd: PositionPhysics){

		super();

		this.position = new PositionPhysics();
		this.position.x = this.getRandomInt(areaStart.x, areaEnd.x);
		this.position.y = this.getRandomInt(areaStart.y, areaEnd.y);

		this.health = 100;
		this.angleDegrees = 0;
	}


	getRandomInt(min:number, max:number)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	draw(context: CanvasRenderingContext2D) {

		var topLeftCornerX = this.position.x - this.spriteWidth / 2;
		var topLeftCornerY = this.position.y - this.spriteHeight / 2;

		context.beginPath();
		context.rect(topLeftCornerX, topLeftCornerY, this.spriteWidth, this.spriteHeight);
		context.closePath();
		context.stroke();
	}

	move(newPosition:Position){

	}

	startAim(){

	}

	stopAim(){

	}

	die(){

	}

	jump(){

	}

	startFire(){
		
	}

	stopFire(){
		this.weapon.fire(this.position, this.angleDegrees, this.power);
	}
}