class Worm extends PhysicsObject{

	public weapon:Weapon;
	public health:number;
	public angleDegrees:number;
	public power:number;

	constructor(position:PositionPhysics){

		super();

		this.position = position;
		this.health = 100;
		this.angleDegrees = 0;
	}

	draw(){

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