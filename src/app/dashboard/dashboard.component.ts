import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColormodeService } from '../services/colormode.service';
import { routeTransitionAnimations } from '../route-transition-animations';
import { AuthService } from "../services/auth.service";
import Amplify, { API } from 'aws-amplify';
import {TilesComponent} from '../dialogs/tiles/tiles.component'
import { MatDialog } from '@angular/material/dialog';
import { APIService } from '../API.service';

import {
  Map,
  Control,
  DomUtil,
  ZoomAnimEvent,
  Layer,
  MapOptions,
  tileLayer,
  latLng,
  popup,
  LatLng,
  LatLngExpression,
  circle
  
  
} from 'leaflet';
declare let L:any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[routeTransitionAnimations]
})
export class DashboardComponent implements OnInit {
  ferrydocks: any;
  map!: Map;
  location:any;

  

  
    /**
   * Prepares route
   * @param outlet will emit an activate event any time a new component is being instantiated,
   *               and a deactivate event when it is being destroyed
   * @returns true if route, false otherwise
   */
     prepareRoute(outlet: RouterOutlet): boolean {
      return (
        outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData["animationState"]
      );
    }

    constructor(
      private colormode: ColormodeService,
      private auth : AuthService,
      public dialog: MatDialog,
      private api: APIService
     
    ){

      this.colormode.load();
    }

  
    ngOnInit(): void {

      this.api.GetFerjeData("ferrydocks").then((data:any)=>{
      
        this.ferrydocks =JSON.parse(data.topic);
      })

    }
    async getCred(){
      this.auth.getCred()
    }
    signOut(){

      this.auth.signOut()
    }

    onActivate(e:any){
      console.log(e)
     
     
      
      e.activate.subscribe((data:any)=>{
      
       this.map = data.theMap;

        if (data.name){

          this.openStatusDialog(data.name,data.location)
        }
        
        

      })

    }

    onReceiveMap(e:any){
      e.maps.subscribe((data:any)=>{

        

        console.log(data)

      })
      
    }

    openStatusDialog(ferrydock:any,location:any) {
      

      // this.map.flyTo(latLng(location[0],location[1],10))
      
      const dialogRef = this.dialog.open(TilesComponent,{
        height: '80vh',
        width: '80vw',
        data:{
          name:ferrydock,
          location:location
        }
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

    flyToDock(location:any){
      this.map.flyTo(latLng(location[0],location[1],14))

    }

}
