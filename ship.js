class ship{
	//size - int; team - 1 or 2; headLocation - (int, int)
	constructor(size, team, rowHead, colHead){
		this.size = size;
		this.hits = [0]*size;
		this.team = team;
		this.rowHead = rowHead;
		this.colHead = colHead;
	}
	getSize(){
		return this.size;
	}
	getTeam(){
		return this.team;
	}
	getHead(){
		return [this.rowHead, this.colHead];
	}
	isSunk(){
		for(let i = 0; i < size; i++){
			if(hits[i] == 0){
				return false;
			}
		}
		return true;
	}
	registerHit(distance){
		this.hits[hitLocation] = 1;
	}
}