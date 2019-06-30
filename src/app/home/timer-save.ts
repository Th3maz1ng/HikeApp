export class TimerSave
{
	public id:string;
	public startTimeStamp:number;
	public baseSeconds:number;
	public state:string;
	
	constructor(id:string,startTimeStamp:number,baseSeconds:number,state:string)
	{
		this.id = id;
		this.startTimeStamp = startTimeStamp;
		this.baseSeconds = baseSeconds;
		this.state = state;
	}
}