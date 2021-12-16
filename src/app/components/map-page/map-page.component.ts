import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LatLngExpression,svg,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle, divIcon,DivIcon,Control, markerClusterGroup, MarkerClusterGroup} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PubSub } from 'aws-amplify';
import { MatDialog } from '@angular/material/dialog';
import {FerjekaiStatusComponent} from '../../dialogs/ferjekai-status/ferjekai-status.component'
import {TilesComponent} from '../../dialogs/tiles/tiles.component'
import { APIService } from '../../API.service';
import { interval, Subject, Subscriber, Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { TypeofExpr } from '@angular/compiler';
import { parse } from 'path';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { switchMap, takeUntil } from 'rxjs/operators';

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
  destroyed$ = new Subject();
  coord =""
  livedata =[]
  subscription: any;
  connected :any;
  ferrydocks :any;
  ferry:any
  ferrys:any[]=[]
  subscription2!: Subscription 
  private subscriptions = new Subscription()

  boatSubscrition = new Subscription() 
  subscriptions1: Subscription[] = []
  markerClusterGroup!: MarkerClusterGroup;
  
  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private api: APIService,
    private httpclient:HttpclientService
    
    // private _formBuilder: FormBuilder,
  ) {



 


  }

  ngOnDestroy():void{

    
    this.subscriptions1.forEach((subscription) => subscription.unsubscribe())
      this.subscriptions.unsubscribe()
   
    this.boatSubscrition.unsubscribe()
    
  }


  setConnect(data:any){






  }

 

  ngOnInit(): void {

    this.markerClusterGroup = markerClusterGroup({removeOutsideVisibleBounds: true});
   
   
    
  

    this.api.ListDocks().then((data:any)=>{
     
      this.ferrydocks =(data.items);
    })

   
    

this.boatSubscrition.add(    interval(10000)
      .pipe(switchMap(() => this.httpclient.getBoatLocation(257054950).pipe(takeUntil(this.destroyed$))))
      .subscribe((result) => {

        
        this.onFerryLocation(result)
      
      }))

  }

  onFerryLocation(location:any){

    if(this.ferry){

      this.map.removeLayer(this.ferry)
    }

    let coordinates = location.geometry.coordinates

    console.log(coordinates)

    this.ferry = circle([coordinates[1],coordinates[0]],{radius:100,color:"blue",fillColor:"blue",stroke:true}).addTo(this.map)

  }

  recieveCluster(markerCluster: MarkerClusterGroup){

    this.markerClusterGroup = markerCluster;
   
    


  }

  receiveMap(map: Map) {
    console.log(map)
    this.map = map;
    this.activate.emit({theMap:this.map})
   

  
   
// you can set .my-div-icon styles in CSS

this.api.ListDocks().then((data:any)=>{
      
  this.ferrydocks =data.items;
  
  for( let i in this.ferrydocks){

    let ferry = circle(this.ferrydocks[i].location,{radius:800,color:"yellow",className:"pulse"}).bindTooltip(this.ferrydocks[i].name,
    {offset:[0, 0]})

    
   
		
		
			

       
  ferry.addTo(this.map)

  
 
  
  ferry.on('click',(e:any)=>{
    
    
    
    this.activate.emit({name:this.ferrydocks[i].name,location:this.ferrydocks[i].location,theMap:this.map})
    
    
    

  })

  this.ferrys.push(ferry)

  // this.api.GetDockData(this.ferrydocks[i].id).then((data:any)=>{
    
  //   if(data){
  //   let res =data.alarms
  //     let temp = false;
  //   for( let i in res){
  //     let status = (res[i].value.toLowerCase() === "true")
      
  //     if (status){

  //       temp = true;
  //     }


  //   }
  //     if (temp){
  
  //     ferry.getElement()?.classList.add("pulse")
  //     ferry.setStyle({color:"red",className:''})
      
  //   }else{
  //     ferry.getElement()?.classList.remove("pulse")
  //     ferry.setStyle({color:"green"})
      
      
  
  //   }

    
  
      
  
    
  //   }
  // })

  // this.api.OnUpdateByIdListener(this.ferrydocks[i].id).subscribe((data:any)=>{

  //   let alarms =data.value.data.onUpdateById.alarms

  //   let temp = false;
  //   for(let i in alarms){

  //     let status = (alarms[i].value.toLowerCase() === "true")
      
  //     if (status){

  //       temp = true;
  //     }
  //   }

     
  //   if (temp){
  
  //     ferry.getElement()?.classList.add("pulse")
  //     ferry.setStyle({color:"red",className:''})
      
  //   }else{
  //     ferry.getElement()?.classList.remove("pulse")
  //     ferry.setStyle({color:"green"})
      
      
  
  //   }

   
  

  // })

// this.subscription=  PubSub.subscribe(`fergekai/${this.ferrydocks[i].id}`,{}).subscribe((data)=>{
  
//     let res = data.value[this.ferrydocks[i].id]
//     let dataName = Object.keys(res)[0];
    
//     if(dataName = "alarms"){
//       let temp = false;
//       for(let i in res.alarms){
        
//         let status = (res.alarms[i].value.toLowerCase() === "true")
        
//         if (status){
  
//           temp = true;
//         }
//       }
  
       
//       if (temp){
    
//         ferry.getElement()?.classList.add("pulse")
//         ferry.setStyle({color:"red",className:''})
        
//       }else{
//         ferry.getElement()?.classList.remove("pulse")
//         ferry.setStyle({color:"green"})
        
        
    
//       }


//     }
  
  
//    })


const source =timer(5000);
  
const sub = source.subscribe(val=>{
 
  this.ferrys[parseInt(i)].setStyle({color:"grey"})
  this.ferrys[parseInt(i)].bindTooltip(`${this.ferrydocks[i].name} is offline`)
 this.ferrys[parseInt(i)].off("click")
 this.ferrys[parseInt(i)].getElement()?.classList.remove("pulse")

});


  let subscription=   PubSub.subscribe(`fergekai/${this.ferrydocks[i].id}`,{}).subscribe({

    
    
    next:(data)=>{

      sub.unsubscribe()
      let res = data.value[this.ferrydocks[i].id]
      let dataName = Object.keys(res)[0];
      
      if(dataName = "alarms"){
        let temp = false;
        for(let i in res.alarms){
          
          let status = (res.alarms[i].value.toLowerCase() === "true")
          
          if (status){
    
            temp = true;
          }
        }
    
         
        if (temp){
      
          ferry.getElement()?.classList.add("pulse")
          ferry.setStyle({color:"red",className:''})
          
        }else{
          ferry.getElement()?.classList.remove("pulse")
          ferry.setStyle({color:"green"})


    }
  
 
        
        
    
      }


    },
    error:error =>{
      console.log(error)
      this.ferrys[parseInt(i)].setStyle({color:"grey"})
  this.ferrys[parseInt(i)].bindTooltip(`${this.ferrydocks[i].name} is offline`)
 this.ferrys[parseInt(i)].off("click")
 this.ferrys[parseInt(i)].getElement()?.classList.remove("pulse")
    }



  
  
   }) 

   this.subscriptions.add(subscription)
  
   
 
  }
  
})


  }
  

  
    
   

      
    


    


  

  

  
 
   

    
 
 
 
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



  


  convertcsv(){
    
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }

  
}






