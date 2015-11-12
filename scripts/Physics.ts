class Physics{

	private ground: Ground;
	private physicsObjects: PhysicsObject[];

	constructor(ground: Ground){
		this.ground = ground;
		this.physicsObjects = [];
	}

	addPhysicsObject(object: PhysicsObject){
		this.physicsObjects.push(object);
	}

	computeTick(){


		for(var i=0; i< this.physicsObjects.length; i+=1){
 			
 			var currentObject = this.physicsObjects[i].position;
			if(this.ground.containsPoint(currentObject.x, currentObject.y) == false){
				currentObject.y += 1;
			}
		}
	}
}