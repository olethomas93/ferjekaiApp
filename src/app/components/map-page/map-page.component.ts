import { Component, OnInit } from '@angular/core';
import { LatLngExpression,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit {
  private map!: Map;
  private zoom!: number;
  private latlng!:any
  coord =""
  
  constructor(
    private http: HttpService,
    // private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  receiveMap(map: Map) {
    this.map = map;

    let circle1 = circle([62.39530111176861, 6.166541253181221],{radius:500,color:"red"})

    circle1.bindPopup(`` +
    `<h1>Kai: Sulesund </h1>` +
    `<h2>AlarmStatus: God </h2>` +
    `<h2> annet: Annet</h2>`)


    circle1.addTo(this.map)
    
  }



  getPostition(ref:any){


    this.http.getpositonRoadRef(ref).subscribe((data)=>{
     


      console.log(data)
  
      // let point = data.geometri.wkt
      
      





    })

  }

  

    



      
   

  
  getColor(){

    let colors = ["red","blue","yellow","green","black","purple","brown"]

    return colors
  }

  addToMap(lists:Array<any>,names:Array<any>){

    for(let i=0 ; i< lists.length;i++){
      let colors = this.getColor()
      var color:string = colors[Math.floor(Math.random() * colors.length)];

      
      
      
      let latlngs = lists[i]
      let line = polyline(latlngs, {color: color}).addTo(this.map);
      line.bindTooltip(names[i]).openTooltip()
      this.map.fitBounds(line.getBounds());

    }
    
 
  }
  
 ngAfterViewInit() {

  //this.getGpsLog()
 
}


  getGpsLog(){

    this.http.Getcoordinates().subscribe(data=>{

      this.addToMap(data.lists,data.names)
    })



  }


  convertcsv(){
    
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }

  recieveCoord(latlong:any){

    
    
    this.http.getRoadReference(latlong).subscribe((data)=>{

      
    //   let section = data[0].vegsystemreferanse.kortform

    //  let newmarker = circleMarker([latlong.lat,latlong.lng],{radius:2}).bindPopup(section).addTo(this.map)

    //   newmarker.openPopup()
    //    newmarker.addEventListener("click",function(event){

    //     newmarker.remove()

    //    })


    })



  }
}
