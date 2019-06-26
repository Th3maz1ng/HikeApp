import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hike } from '../hike';
import { HikeService } from '../hike.service';
import { Second2TimePipe } from '../second2time.pipe';
import { IExtendGPX } from '../../IExtendGPX';

import * as L from 'leaflet';

import 'leaflet';
import 'leaflet-gpx';
 
@Component({
  selector: 'app-hike-detail',
  providers : [Second2TimePipe],
  templateUrl: 'hike-detail.component.html',
  styleUrls: ['hike-detail.component.scss'],
  
})


export class HikeDetailComponent implements OnInit {
  title = 'Hike details page';
	
  @Input() hike: Hike;
  
  @ViewChild('hikeMap') hikeMap;
 
  constructor(private route: ActivatedRoute, private hikeService: HikeService, private second2time:Second2TimePipe) { 
  }
 
  ngOnInit() {
	console.log(this.route.snapshot.paramMap.get('id'));
	this.getHike();
	
	//Map section
	const hikeAppConst = L.map(this.hikeMap.nativeElement)
						  .setView([45.778760, 3.085081], 13);
	
	let options =  
	{
      attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id:'mapbox.outdoors',
      accessToken: 'pk.eyJ1IjoiZ3dlbm5yb2JpbiIsImEiOiJjandtOHA0NW4xYXpsNDVuNmk3Mm5zbWRhIn0.yE-MuvqyYf_v5eHjQQQ-nw',
      style: "mapbox://styles/gwennrobin/cjwuexwo31avf1cnxzfwutiuf"
    };
	
	hikeAppConst.locate({setView: true, maxZoom: 16})
        .on('locationfound', function(e : L.LocationEvent){
          var radius = e.accuracy;
          L.marker(e.latlng).addTo(hikeAppConst)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
        })
       .on('locationerror', function(e : L.LocationEvent){
            console.log(e);
            alert("Location access denied.");
        });
	
	//hikeAppConst
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',options).addTo(hikeAppConst);
	
	let paramsGPX : IExtendGPX;
	paramsGPX = 
	{
		startIconUrl: 'assets/pin-icon-start.png',
		endIconUrl: 'assets/pin-icon-end.png',
		shadowUrl: 'assets/pin-shadow.png'
		,wptIconUrls : {
        '': 'assets/pin-icon-wpt.png',
      },
	}
	
	new L.GPX("assets/banne.gpx", {
		async: false,
		marker_options : paramsGPX,
		polyline_options: {
        color: 'red',
        opacity: 0.75,
        weight: 3,
        lineCap: 'round'
		}
	}).on('loaded', function(e) {hikeAppConst.fitBounds(e.target.getBounds());}).addTo(hikeAppConst);
  }
  
  getHike(): void
  {
	const id = Number(this.route.snapshot.paramMap.get('id'));
	this.hikeService.getHike(id)
	.subscribe(obj => this.hike = obj);
  }
}
