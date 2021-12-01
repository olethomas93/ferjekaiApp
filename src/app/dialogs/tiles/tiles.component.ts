import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PubSub } from 'aws-amplify';
import { title } from 'process';
import { MatDialogRef } from '@angular/material/dialog';
import { Json } from 'aws-sdk/clients/robomaker';
import { APIService } from '../../API.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { String } from 'aws-sdk/clients/acm';
import { bool } from 'aws-sdk/clients/signer';
export interface Alarm {
  name: string;
  status:string
}

export interface tile {


name:string
value:any
color:string
icon:string
unit:String


}

export interface weather{
  icon:string
  unit:string
  value:number
  name:string


}

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit,OnDestroy {
  subscription: any;
  displayedColumns: string[] = ['name', 'status'];
  dataSource = [{}]
  alarmsUpdated!: Date
  weatherUpdated!: string
  editable!:bool;

  weatherData!:weather[];

  data!:tile[]

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns:1,
        miniCard: { cols: 1, rows: 1 }
      }
    }

      return {
        columns:4,
        miniCard:{cols:1,rows:1}
      }
    })
  );
  name: any;

  constructor(private breakpointObserver: BreakpointObserver,   
    @Inject(MAT_DIALOG_DATA) public ferrydockName: any,

    public dialogRef: MatDialogRef<TilesComponent>,
    private api: APIService,
    private ref: ChangeDetectorRef,
   
    
    
    ) {

      this.dialogRef.backdropClick().subscribe((data)=>{

        this.dialogRef.close()


      })
  
      this.name = this.ferrydockName;
  }

  ngOnDestroy():void{

    this.subscription.unsubscribe()

    console.log(this.data)

  }

  ngOnInit(){
 

    console.log(this.ferrydockName)

  this.api.GetDockData(this.ferrydockName.name.toLowerCase()).then((data:any)=>{
   console.log(data)
    this.weatherUpdated = new Date(data['updatedAt']).toString()
    this.updateData(data)
  }).catch((e)=>{

    console.log(e)
  })



 this.subscription= this.api.OnUpdateByIdListener(this.ferrydockName.name.toLowerCase()).subscribe((data:any)=>{


  
    if(data){

      console.log(data)
      this.weatherUpdated = new Date(data.value.data.onUpdateById['updatedAt']).toString()
      let topic = data.value.data.onUpdateById
      this.updateData(topic)
      
    }

  })

  }

  ngAfterViewInit(){
 


  }


close(e:any){
  
  this.dialogRef.close()
  this.ref.detectChanges()
}

  updateData(data:any){
    
    
   console.log(data)
      
     
      
      this.updateWeatherData(data.weather)
      

 
   
      this.updateAlarmData(JSON.parse(data.alarms))
   

   
    
      this.updateFerryData(data.drift)


  


  }

  updateFerryData(data:any){
    for (let i in data){

      if(data[i].unit =="oC"){
        data[i].unit = "°C"
      }

      if(data[i].unit =="o") {
        data[i].unit ="°"
      }
     

    }
   this.data = data

  



  }



  updateAlarmData(data:any){

    
  

    this.dataSource =[]
    for(let i in data){
      let status = (data[i].toLowerCase() === "true")
    
   
      this.dataSource.push({name:i,status:status})
      
    }
    
    

  }


  updateWeatherData(data:any){
    for (let i in data){

      if(data[i].unit =="oC"){
        data[i].unit = "°C"
      }

      if(data[i].unit =="o") {
        data[i].unit ="°"
      }
     

    }
   this.weatherData = data

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.close();
  }

}




