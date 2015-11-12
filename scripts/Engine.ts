class Engine{

	private currentTeamIndex:number;
	private teams:Team[] = [];
	private interface: Interface;
	private ground:Ground;
	private physics: Physics;
	private context:CanvasRenderingContext2D;
	private viewportWidth: number;
	private viewportHeight: number;
	private teamMembersCount: number = 5;

	constructor(viewportWidth: number, viewportHeight: number){

		this.context = context;
		this.viewportWidth = viewportWidth;
		this.viewportHeight = viewportHeight;
	}

	startGame(){
		this.interface = new Interface();
		this.ground = new Ground();
		this.physics = new Physics(this.ground);
		this.createTeams(1);
	}

	createTeams(count:number){
		this.teams = [];

		
		for (var i = 0; i < count; i+=1){
			this.teams.push(this.createTeam());
		}
	}

	createTeam(){

		var teamAreaStart:PositionPhysics = new PositionPhysics();
		teamAreaStart.x = 0;
		teamAreaStart.y = 0;

		var teamAreaEnd:PositionPhysics = new PositionPhysics();
		teamAreaEnd.x = this.viewportWidth;
		teamAreaEnd.y = this.viewportHeight;

		var newTeam = new Team(teamAreaStart, teamAreaEnd, this.teamMembersCount);
		newTeam.enablePhysics(this.physics);
		
		return newTeam;
	}



	draw(context: CanvasRenderingContext2D) {

		if(this.ground !== null &&
		   this.physics != null){

			this.physics.computeTick();
			this.ground.draw(context);
			this.drawTeams(context);
			this.interface.draw(context);
		} 
	}

	drawTeams(context: CanvasRenderingContext2D) {
		for (var i = 0; i < this.teams.length; i+=1){
			this.teams[i].draw(context);
		}
	}

	isGameStopped(){

		if(this.teams.length <= 0){
			return true;
		}

		for(var i=0; i<this.teams.length; i+=1){

			if(this.teams[i].members.length <= 0){
				return true;
			}
		}

		return false;
	}

	startTurn(){

	}

	endTurn(){

	}


}