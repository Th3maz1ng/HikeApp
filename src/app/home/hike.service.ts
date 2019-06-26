import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hike } from './hike';
import { HIKES } from './mock-hikes';

@Injectable({
  providedIn: 'root',
})

export class HikeService {
  constructor() { }
  
  getHikes(): Observable<Hike[]> {
    return of(HIKES);
  }
  
  getHike(id:number) : Observable<Hike>{
	  for(let hike of HIKES)
	  {
		  if(hike.id == id) return of (hike);
	  }
	  
	  return of(HIKES[0]);
  }
  
  htmlMarkGenerator(mark:number)
  {
  	let markTab = [];
  	
  	for (var i = 0; i < mark; ++i) {
  		markTab.push(1);
  	}
  	
  	for (var j = 0;j < 5-mark; ++j){
  		markTab.push(0);
  	}
  	
  	return markTab;
  }
}