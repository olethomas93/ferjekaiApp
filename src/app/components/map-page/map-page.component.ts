import { Component, OnInit } from '@angular/core';
import { LatLngExpression,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PubSub } from 'aws-amplify';
import { MatDialog } from '@angular/material/dialog';
import {FerjekaiStatusComponent} from '../../dialogs/ferjekai-status/ferjekai-status.component'
import {TilesComponent} from '../../dialogs/tiles/tiles.component'
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit {
  private map!: Map;
  private zoom!: number;
  private latlng!:any
  sulesund :any
  coord =""
  livedata =[]
  subscription: any;
  connected :any;
  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    // private _formBuilder: FormBuilder,
  ) {

  this.subscription =  PubSub.subscribe('1.5.0/Sulesund/TagValues').subscribe({
      next: data =>this.updateData(data.value.TagData[0]),
      error: error => console.error(error)
      
  });

  this.connected =  PubSub.subscribe('$aws/events/presence/+/Sulesund').subscribe({
    next: data =>
    this.updateData(data),
    error: error => console.error(error)
    
});
  



  }

  ngOnDestroy():void{

    this.subscription.unsubscribe()



  }


  setConnect(data:any){






  }

  ngOnInit(): void {}

  receiveMap(map: Map) {
    this.map = map;

     this.sulesund = circle([62.39530111176861, 6.166541253181221],{radius:500,color:"red"})

    //  this.sulesund.bindPopup(`` +
    // `<h1>Kai: Sulesund </h1>` +
    // `<h2>AlarmStatus: God </h2>` +
    // `<h2> annet: Annet</h2>`)


    this.sulesund.addTo(this.map).on('click',(e:any)=>{

      this.openStatusDialog()

    })
    


  }
  openStatusDialog() {
    const dialogRef = this.dialog.open(TilesComponent,{
      height: '80vh',
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  test(e:any){
console.log(e)

this.openStatusDialog()

  }

  
  




  updateData(data:any){
    console.log(data)

    this.sulesund.bindPopup(`` +
    `<h1>Kai: Sulesund Ferjekai </h1>` +
    `<h2>AlarmStatus: God </h2>` +
    `<h2>connected : ${data.eventType}</h2>`)

    
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


  


  convertcsv(){
    
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }

  
}




