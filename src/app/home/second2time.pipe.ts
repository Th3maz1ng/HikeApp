import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({ name:'second2time'})
export class Second2TimePipe implements PipeTransform {
  transform(seconds:number):string
  {
	let hours:number = Math.floor(seconds / 3600);
	let timeString:string;
	
	if(hours < 10)
		timeString = '0'+hours;
	else
		timeString = hours.toString();
	
	let minutes:number = Math.floor((seconds % 3600)/60);
	
	if(minutes < 10)
		timeString += ':0'+minutes;
	else
		timeString += ':'+minutes.toString();
	
	let remainingSeconds:number = seconds % 3600 % 60; 
	
	if(remainingSeconds < 10)
		timeString += ':0'+remainingSeconds;
	else
		timeString += ':'+remainingSeconds.toString();
	
	return timeString;
  }
}