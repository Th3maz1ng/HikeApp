import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hike } from '../hike';
import { HikeService } from '../hike.service';
import { Second2TimePipe } from '../second2time.pipe';
import { IExtendGPX } from '../../IExtendGPX';
import { leafletPip } from '@mapbox/leaflet-pip';
import * as L from 'leaflet';

import 'leaflet';
import 'leaflet-gpx';
import '@mapbox/leaflet-pip';
@Component({
  selector: 'app-hike-start',
  providers : [Second2TimePipe],
  templateUrl: 'hike-start.component.html',
  styleUrls: ['hike-start.component.scss'],
  
})


export class HikeStartComponent implements OnInit {
  title = 'Current Hike page';
	
  @Input() hike: Hike;
  
  @ViewChild('hikeMap') hikeMap;
 
  hikeAppConst;
  gpx;
  constructor(private route: ActivatedRoute, private hikeService: HikeService, private second2time:Second2TimePipe) { 
  }
  
  ngOnInit() {
   // this.getHike();
    this.getHikeAPI();
    this.getHikeGPX();
  }
    //Appel de la methode getHike du Service avec pour parametre l'identifiant de la rando passée en Url.
  getHikeAPI() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hikeService.getHikeApi(id)
      .subscribe((data) => this.hike = {
        id: data['id'],
        name: data['name'],
        duration: data['duration'],
        city: data['city'],
        descr: data['descr'],
        mark: 4,
        img: "http://www.tourisme-hautevienne.com/sites/default/files/randonne%CC%81e-marcheur-chemin-creux.jpg",
        length: data['length'],
        steps: data['steps'],
      },
      );
    }
    getHikeGPX(){
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.hikeService.getHikeGPX(id).subscribe((gpx) => this.gpx =gpx);
    }

   //Initialisation de la map Leaflet lors du chargement du rendu.
  ionViewWillEnter() {
    console.log(this.hike);
   
    //Map section
    this.hikeAppConst = L.map(this.hikeMap.nativeElement)
    .setView([48.46, -4.22], 13);
    
    let options =  
    {
      attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id:'mapbox.outdoors',
      accessToken: 'pk.eyJ1IjoiZ3dlbm5yb2JpbiIsImEiOiJjandtOHA0NW4xYXpsNDVuNmk3Mm5zbWRhIn0.yE-MuvqyYf_v5eHjQQQ-nw',
      style: "mapbox://styles/gwennrobin/cjwuexwo31avf1cnxzfwutiuf"
    };

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',options).addTo(this.hikeAppConst);
   

    let paramsGPX : IExtendGPX;
    paramsGPX = 
    {
      startIconUrl: 'assets/pin-icon-start.png',
      endIconUrl: 'assets/pin-icon-end.png',
      shadowUrl: 'assets/pin-shadow.png',
      wptIconUrls : {
      
      },
    }
    
    new L.GPX(this.gpx, {
      async: true,
      marker_options : paramsGPX,
      polyline_options: {
        color: 'red',
        opacity: 0.75,
        weight: 3,
        lineCap: 'round'
      }
    }).on('loaded', e => {
      this.hikeAppConst.fitBounds(e.target.getBounds());
      console.log(32);
    }).addTo(this.hikeAppConst);

    this.hikeAppConst.locate({setView: false, watch: true, maxZoom: 16})
    .on('locationfound',(e : L.LocationEvent )=>{
      var radius = e.accuracy;
      L.marker(e.latlng).addTo(this.hikeAppConst)
      })
    .on('locationerror', (e : L.LocationEvent )=>{
      console.log(e);
      alert("Location access denied.");
    });
  }
}
