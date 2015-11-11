class Engine{

	private currentTeamIndex:number;
	private teams:Team[] = [];
	private ground:Ground;
	private physics: Physics;
	private context:CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D){
		this.context = context;
	}

	startGame(){
		this.ground = new Ground();
		this.physics = new Physics(this.ground);
		this.createTeams();
	}

	createTeams(){

	}

	draw(){

		if(this.ground !== null &&
		   this.physics != null){

			this.physics.computeTick();
			this.ground.draw(this.context);
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