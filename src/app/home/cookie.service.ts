import { Injectable } from '@angular/core';

import { TimerSave } from './timer-save';

@Injectable({
  providedIn: 'root',
})

export class CookieService {
	constructor() { }
	
	public saveObject(timerSave:TimerSave) : void
	{
		console.log("saving data");
		
		let dataArray = this.getObjectArrayHelper();
		
		for(let i = 0; i < dataArray.length; i++)
		{
			if(timerSave.id == dataArray[i].id)
			{
				dataArray[i] = timerSave;
				document.cookie = "timerData="+JSON.stringify(dataArray)+"; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/";
				return;
			}
		}
		
		dataArray.push(timerSave);
		document.cookie = "timerData="+JSON.stringify(dataArray)+"; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/";
	}
	
	public getObject(id:string) : TimerSave
	{
		console.log("getting data");
		
		let dataArray = this.getObjectArrayHelper();
		
		for(let i = 0; i < dataArray.length; i++)
		{
			if(dataArray[i].id == id)
			{
				return dataArray[i];
			}
		}
		
		return null;
	}
	
	private getObjectArrayHelper() : TimerSave[]
	{
		let objectLiteral = document.cookie;
		let splittedLiteral = objectLiteral.split('=');
		if(splittedLiteral.length == 1)
			return [];
		
		return JSON.parse(splittedLiteral[1]);
	}
}