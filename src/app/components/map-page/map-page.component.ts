import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LatLngExpression,svg,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle, divIcon,DivIcon,Control} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PubSub } from 'aws-amplify';
import { MatDialog } from '@angular/material/dialog';
import {FerjekaiStatusComponent} from '../../dialogs/ferjekai-status/ferjekai-status.component'
import {TilesComponent} from '../../dialogs/tiles/tiles.component'
import { APIService } from '../../API.service';

declare let L:any
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit {
  @Output() activate = new EventEmitter();
  @Output() maps =new EventEmitter();
  public map!: Map;
  private zoom!: number;
  private latlng!:any
  sulesund :any
  coord =""
  livedata =[]
  subscription: any;
  connected :any;
  ferrydocks :any;
 
  
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

   
    
    // this.api.OnUpdateByIdListener("sulesund").subscribe((data:any)=>{

    //   let res =JSON.parse(data.value.data.onUpdateById.data)

        

    //   if (res.alarms['led alarm'].toLowerCase() === "true"){

        
    //     this.sulesund.setStyle({color:"red",className:"pulse"})
        
    //   }else{
    //     this.sulesund.setStyle({color:"green",className:""})

    //   }

    // })

    this.api.ListDocks().then((data:any)=>{
      console.log(data)
      this.ferrydocks =(data.items);
    })

   


  }

  receiveMap(map: Map) {
    console.log(map)
    this.map = map;
    this.activate.emit({theMap:this.map})
   

  
   
// you can set .my-div-icon styles in CSS

this.api.ListDocks().then((data:any)=>{
      
  this.ferrydocks =data.items;

  for( let i in this.ferrydocks){

    let ferry = circle(this.ferrydocks[i].location,{radius:500,color:"red"}).bindTooltip(this.ferrydocks[i].name,
    {offset:[0, 0]}).openTooltip()

       
  ferry.addTo(this.map)

  

  
  ferry.on('click',(e:any)=>{
    console.log("click")
    
    this.activate.emit({name:this.ferrydocks[i].name,location:this.ferrydocks[i].location,theMap:this.map})
    
    
    

  })

  this.api.GetDockData(this.ferrydocks[i].name).then((data:any)=>{

    if(data){
    let res =JSON.parse(data.alarms)
      console.log(res)
    for( let i in res){

      if (res[i].value.toLowerCase() === "true"){
  
      ferry.getElement()?.classList.add("pulse")
      ferry.setStyle({color:"red",className:''})
      
    }else{
      ferry.getElement()?.classList.remove("pulse")
      ferry.setStyle({color:"green"})
      
      
  
    }

    }
  
      
  
    
    }
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

  
    
   

      
    


    


  

  

  
 
   

    
 
 
 
 closeDialog(){

  this.dialog.closeAll
 }
 
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




