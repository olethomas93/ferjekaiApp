import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LatLngExpression,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle, divIcon,DivIcon} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PubSub } from 'aws-amplify';
import { MatDialog } from '@angular/material/dialog';
import {FerjekaiStatusComponent} from '../../dialogs/ferjekai-status/ferjekai-status.component'
import {TilesComponent} from '../../dialogs/tiles/tiles.component'
import { APIService } from '../../API.service';
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
  ferrydocks :any;
  @Output() activate = new EventEmitter();
  
  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private api: APIService
    // private _formBuilder: FormBuilder,
  ) {



 
//MQTT pubsub
//   this.connected =  PubSub.subscribe('$aws/events/presence/+/Sulesund').subscribe({
//     next: data =>
//     this.updateData(data),
//     error: error => console.error(error)
    
// });
  

//this.ferrydocks =[{location:[62.39530111176861, 6.166541253181221],name:"Sulesund"},{location:[62.69530111176861, 6.166541253181221],name:"lyngen"}]


  }

  ngOnDestroy():void{

   



  }


  setConnect(data:any){






  }

  ngOnInit(): void {

    
    this.api.OnUpdateByIdListener("alarms").subscribe((data:any)=>{

      let res =JSON.parse(data.value.data.onUpdateById.topic)
      if (res.Values.LED_Radio_Aktiv == true){

        
        this.sulesund.setStyle({color:"red",className:"pulse"})
        
      }else{
        this.sulesund.setStyle({color:"green",className:"pulse"})

      }

    })

    this.api.GetFerjeData("ferrydocks").then((data:any)=>{
      
      this.ferrydocks =JSON.parse(data.topic);
    })

   


  }

  receiveMap(map: Map) {
    this.map = map;


   
// you can set .my-div-icon styles in CSS

this.api.GetFerjeData("ferrydocks").then((data:any)=>{
      
  this.ferrydocks =JSON.parse(data.topic);

  for( let i in this.ferrydocks){

    let ferry = circle(this.ferrydocks[i].location,{radius:500,color:"red"}).bindTooltip(this.ferrydocks[i].name,
    {offset:[0, 0]}).openTooltip()

       
  ferry.addTo(this.map)

  

  
  ferry.on('click',(e:any)=>{
    console.log("click")
    
    this.activate.emit(this.ferrydocks[i].name)
    //this.openStatusDialog()

  })
  }
})

   

  }
  
    // this.sulesund = circle([62.39530111176861, 6.166541253181221],{radius:500,color:"red"}).bindTooltip('Sulesund',
    // {offset:[0, 0]}).openTooltip()
    
    // //  this.sulesund.bindPopup(`` +
    // // `<h1>Kai: Sulesund </h1>` +
    // // `<h2>AlarmStatus: God </h2>` +
    // // `<h2> annet: Annet</h2>`)
   
    
    // this.sulesund.addTo(this.map)

    

    
    // this.sulesund.on('click',(e:any)=>{
    //   console.log("click")
      
    //   this.activate.emit("sulesund")
    //   //this.openStatusDialog()

    // })

  
    
   

      
    


    


  

  

  
 
   

    
 
 
 
 
 
  openStatusDialog() {
    const dialogRef = this.dialog.open(TilesComponent,{
      height: '80vh',
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    // dialogRef.backdropClick().subscribe((data)=>{

    //   this.dialog.closeAll()

    // })

    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
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




