import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hike } from './hike';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HikeService {
	constructor(private http: HttpClient) { }
	
	getHikes(): Observable<Hike[]> {
		var configUrl = 'https://hikes.skyforge.khazad-dum.tech/';
		var data =this.http.get(configUrl);
	return this.http.get<Hike[]>(configUrl);
	}
	getHikeGeoJson(id:Number){
		var configUrl = 'https://hikes.skyforge.khazad-dum.tech/'+id+"/trace";
		const options:object ={responseType:'text'};	 
		console.log(JSON.stringify((this.http.get<string>(configUrl,options))));      
	}

	getHikeApi(id:Number) {
		var configUrl = 'https://hikes.skyforge.khazad-dum.tech/'+id;
	return this.http.get<Hike>(configUrl);
	}
	getHikeGPX(id:Number){
		var configUrl = 'https://hikes.skyforge.khazad-dum.tech/'+id+"/trace";
		const options:object ={responseType:'text'};
		return this.http.get<string>(configUrl,options);
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