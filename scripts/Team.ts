class Team{
	public members:Worm[] = [];
	private areaStart: PositionPhysics;
	private areaEnd: PositionPhysics;


	constructor(areaStart: PositionPhysics, areaEnd: PositionPhysics, membersCount = 0){

		this.areaStart = areaStart;
		this.areaEnd = areaEnd;

		this.generateMembers(membersCount);
	}

	generateMembers(count:number){
		this.members = [];

		for (var i = 0; i < count; i += 1) {
			this.members.push(new Worm(this.areaStart, this.areaEnd));
		}
	}

	addMember(newMember : Worm){
		this.members.push(newMember);
	}

	draw(context: CanvasRenderingContext2D) {
		for (var i = 0; i < this.members.length;i+=1){
			this.members[i].draw(context);
		}

	}

	enablePhysics(physics: Physics){
		for (var i = 0; i < this.members.length; i+=1){
			physics.addPhysicsObject(this.members[i]);
		}
		
	}
}