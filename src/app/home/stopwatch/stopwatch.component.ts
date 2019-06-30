import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Second2TimePipe } from '../second2time.pipe';
import { CookieService } from '../cookie.service';
import { TimerSave } from '../timer-save';

@Component({
  selector: 'my-stopwatch',
  providers : [Second2TimePipe],
  templateUrl: 'stopwatch.component.html',
  styleUrls: ['stopwatch.component.scss'],
  
})


export class StopWatchComponent implements OnInit {
  
	@Input() hikeid : number;
  
	private running : boolean;
	
	private stylePlay  : boolean;
	private stylePause : boolean;
	private styleStop  : boolean;
	
	private elapsedSeconds : number;
	private baseSeconds    : number;
	private startTimeStamp : number;
	
	private intervalRef;
	
	constructor(private second2time:Second2TimePipe,  private cookieService:CookieService) {
		this.running = false;
		this.elapsedSeconds = 0;
		this.intervalRef = null;
		this.baseSeconds = 0;
		this.startTimeStamp = 0;
	}
	
	ngOnInit() {
		
		console.log('hikeid : ' + this.hikeid);
		//On regarde si on a une info pour ce timer : 
		let result = this.cookieService.getObject('hike_'+this.hikeid);
		console.log(result);
		
		if(result == null)
			this.resetStopwatch();
		else
		{
			if(result.state == 'running')
			{
				this.baseSeconds = result.baseSeconds;
				this.startTimeStamp = result.startTimeStamp;
				this.resumeStopwatch();
			}
			else if(result.state == 'stopped')
				this.resetStopwatch();
			else if(result.state == 'paused')//En pause
			{
				this.hideButton("pause");
				this.hideButton("stop");
				this.showButton("play");
				this.baseSeconds = result.baseSeconds;
			}
		}
	}
	
	private hideButton(object:string) : void
	{
		switch(object)
		{
			case "pause":
				this.stylePause = true;
			break;
			case "play":
				this.stylePlay = true;
			break;
			default:
				this.styleStop = true;
		}
	}
	
	private showButton(object:string) : void
	{
	   switch(object)
	  {
		  case "pause":
			this.stylePause = false;
		  break;
		  case "play":
			this.stylePlay = false;
		  break;
		  default:
			this.styleStop = false;
	  }
  }   	

	getElapsedSeconds() : number
	{
		return this.elapsedSeconds + this.baseSeconds;
	}
	
	private runStopwatch() : void
	{
		console.log("timer started");
		//On enregistre le demarrage : 
		this.startTimeStamp = Date.now();
		this.intervalRef = setInterval(() => {this.refreshStopwatch();},1000);
		this.cookieService.saveObject(new TimerSave('hike_'+this.hikeid,this.startTimeStamp,this.baseSeconds,'running'));
		this.hideButton("play");
		this.showButton("pause");
		this.showButton("stop");
	}
	
	private resumeStopwatch() : void
	{
		console.log("timer resumed");
		this.intervalRef = setInterval(() => {this.refreshStopwatch();},1000);
		this.hideButton("play");
		this.showButton("pause");
		this.showButton("stop");
	}
	
	private pauseStopwatch() : void
	{
		console.log("timer paused");
		this.hideButton("pause");
		this.hideButton("stop");
		this.showButton("play");
		this.baseSeconds += this.elapsedSeconds;
		clearInterval(this.intervalRef);
		this.elapsedSeconds = 0;
		this.cookieService.saveObject(new TimerSave('hike_'+this.hikeid,this.startTimeStamp,this.baseSeconds,'paused'));
		
	}
	
	private resetStopwatch() : void
	{
		console.log("timer stopped");
		clearInterval(this.intervalRef);
		this.elapsedSeconds = 0;
		this.baseSeconds = 0;
		this.cookieService.saveObject(new TimerSave('hike_'+this.hikeid,this.startTimeStamp,0,'stopped'));
		this.hideButton("pause");
		this.hideButton("stop");
		this.showButton("play");
	}
	
	private refreshStopwatch() : void
	{
		this.elapsedSeconds = Math.floor((Date.now() - this.startTimeStamp)/1000);
	}
	
	public startIfNotStarted() : void
	{
		if(this.baseSeconds == 0 && this.startTimeStamp == 0)
			this.runStopwatch();
	}

}