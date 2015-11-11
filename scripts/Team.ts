class Team{
	public members:Worm[] = [];
	public isAlive:boolean;

	addMember(newMember : Worm){
		this.members.push(newMember);
	}
}