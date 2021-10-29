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


title:string
value:any
color:string
icon:string
unit:String


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

  weatherData =[
    {title:"Temperature",value:-999,color:"green",icon:"thermostat",unit:"°C"},
    {title:"Air pressure",
    value:-999,color:"green",icon:"storm",unit:"hPa"},
   
    {title:"Air Density",
  value :-999,color:"green",icon:"reorder",unit:"kg/m³"},
    {title:"Wind speed",value:-999,color:"green",icon:"air",unit:"m/s"},
  {title:"Wind Direction",
  value :-999,color:"green",icon:"explore",unit:"°"},
  ]

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
      
     
      
      this.updateWeatherData(JSON.parse(data.weather))
      

 
   
      this.updateAlarmData(data.alarms)
   

   
    
      this.updateFerryData(JSON.parse(data.drift))


  


  }

  updateFerryData(data:any){
    console.log(Object.keys(data).length)

    this.data = [];

    for(let i=0; i <Object.keys(data).length-1;i++){
      

      this.data.push({ 
        
        value:Math.round(data[Object.keys(data)[i]]),
        title:Object.keys(data)[i],
        icon:"schedule",
        color:"green",
        unit:""
      
      
      
      })
      





    }
   



  }



  updateAlarmData(data:any){

    
  

    this.dataSource =[]
    for(let i in data){
      let status = (data[i].toLowerCase() === "true")
      let  name = Object.keys(data[i])
      this.dataSource.push({name:name,status:status})
      
    }
    
    

  }


  updateWeatherData(data:any){
    console.log(data)
    this.weatherData[0].value = Math.round(data.Temperatur) 
    this.weatherData[1].value = Math.round(data.lufttrykk)
    this.weatherData[2].value = Math.round(data.lufttetthet)
    this.weatherData[3].value =Math.round(data.Vindhastighet)
    this.weatherData[4].value =Math.round(data.Vindretning)

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.close();
  }

}




