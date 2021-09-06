import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PubSub } from 'aws-amplify';
import { title } from 'process';
import { MatDialogRef } from '@angular/material/dialog';
import { Json } from 'aws-sdk/clients/robomaker';
import { APIService } from '../../API.service';
export interface Alarm {
  name: string;
  status:string
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

  weatherData =[
    {title:"Wind speed",value:-999,color:"green",icon:"air",unit:"m/s"},
    {title:"Temperature",value:-999,color:"green",icon:"thermostat",unit:"°C"},
    {title:"Air pressure",
  value:-999,color:"green",icon:"storm",unit:"hPa"},
    {title:"Wind Direction",
  value :-999,color:"green",icon:"explore",unit:"°"},
  {title:"Air Density",
  value :-999,color:"green",icon:"reorder",unit:"kg/m³"}
  ]

  data =[
    {title:"Belastning omformer 1",value:-999,color:"green",icon:"bolt",unit:"A"},
    {title:"Belastning omformer 2",value:-999,color:"green",icon:"bolt",unit:"A"},
    {title:"Driftstid motor 1",
  value:-999,color:"green",icon:"schedule",unit:"min"},
    {title:"DriftsTid motor 2",
  value :-999,color:"green",icon:"schedule",unit:"min"},
  {title:"DriftsTid Timer Motor 1",
  value :-999,color:"green",icon:"schedule",unit:"min"},
  {title:"DriftsTid Timer Motor 2",
  value :-999,color:"green",icon:"schedule",unit:"min"},
  {title:"Hastighet Omformer 1",
  value :-999,color:"green",icon:"sports_motorsports",unit:"rpm"},
  {title:"Hastighet Omformer 2",
  value :-999,color:"green",icon:"sports_motorsports",unit:"rpm"},
  {title:"Oljenivå",
  value :-999,color:"green",icon:"opacity",unit:"l"},
  {title:"OljeTemperatur",
  value :-999,color:"green",icon:"thermostat",unit:"°C"},
  {title:"Sylinder Hengetrykk",
  value :-999,color:"green",icon:"expand",unit:"N"}
  ]
  /** Based on the screen size, switch from standard to one column per row */
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

  constructor(private breakpointObserver: BreakpointObserver, 
    public dialogRef: MatDialogRef<TilesComponent>,
    private api: APIService,
    private ref: ChangeDetectorRef
    
    ) {
  
  }

  ngOnInit(){
    //MQTT subscription
  //   this.subscription =  PubSub.subscribe('1.5.0/Sulesund/TagValues').subscribe({
  //     next: data =>this.updateData(data.value),
  //     error: error => console.error(error)
      
  // });
  this.api.GetFerjeData("weather").then((data:any)=>{

    this.updateData(data)
  }).catch((e)=>{

    console.log(e)
  })
  this.api.GetFerjeData("alarms").then((data:any)=>{

    this.updateData(data)
  }).catch((e)=>{

    console.log(e)
  })

 this.subscription= this.api.OnUpdateFerjeDataListener.subscribe((data:any)=>{


  
    if(data){
     
      let topic = data.value.data.onUpdateFerjeData
      this.updateData(topic)
      
    }

  })

  }

  ngAfterViewInit(){
 


  }

close(){
  this.dialogRef.close()
  this.ref.detectChanges()
}

  updateData(data:any){
    
    this.weatherUpdated = new Date(data['GMT']).toString()
    if (data.ID ==1){
      
      data = JSON.parse(data.topic)
      
      this.updateWeatherData(data)
      

    }
    else if(data.ID==0){
      data = JSON.parse(data.topic)
      this.updateAlarmData(data)
    }

    else if(data.ID ==2){
      data=JSON.parse(data.topic)
      this.updateFerryData(data)
    }

  


  }

  updateFerryData(data:any){
    this.data[0].value = Math.round(data.Values.Belastning_Omformer1) 
    this.data[1].value = Math.round(data.Values.Belastning_Omformer2)
    this.data[2].value = Math.round(data.Values.Driftstid_Minutt_Motor1)
    this.data[3].value =Math.round(data.Values.Driftstid_Minutt_Motor2)
    this.data[4].value =Math.round(data.Values.Driftstid_Timer_Motor1)
    this.data[5].value =Math.round(data.Values.Driftstid_Timer_Motor2)
    this.data[6].value =Math.round(data.Values.Hastighet_Omformer1)
    this.data[7].value =Math.round(data.Values.Hastighet_Omformer2)
    this.data[8].value =Math.round(data.Values.Olje_Nivaa)
    this.data[9].value =Math.round(data.Values.Olje_Temperatur)
    this.data[10].value =Math.round(data.Values.Sylinder_Hengetrykk)



  }



  updateAlarmData(data:any){

    
   

    this.dataSource =[]
    for(let i in data.Values){
      
      this.dataSource.push({name:i,status:data.Values[i]})
      
    }
    
    

  }

  updateWeatherData(data:any){
    
    this.weatherData[0].value = Math.round(data.Values.Vindhastighet) 
    this.weatherData[1].value = Math.round(data.Values.Temperatur)
    this.weatherData[2].value = Math.round(data.Values.Luft_Trykk)
    this.weatherData[3].value =Math.round(data.Values.Vindretning)
    this.weatherData[4].value =Math.round(data.Values.Luft_Tetthet)

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.close();
  }
  ngOnDestroy():void{

    this.subscription.unsubscribe()



  }
}


