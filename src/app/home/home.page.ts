import {Component, OnInit } from '@angular/core';
import {Hike} from './hike';
import {HikeService} from './hike.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
	title = 'Let\'s Hike';
	
	hikes:Hike[];
	
	selectedHike : Hike;
	constructor(private hikeService : HikeService)
	{
		
	}
	
	ngOnInit(){
		this.getHikes();
	}
	
	onSelected(hike:Hike) : void {
		this.selectedHike = hike;
	}
	
	getHikes(): void {
		this.hikeService.getHikes().subscribe(hikes => this.hikes = hikes);
	}
}
