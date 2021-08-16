import { Component } from '@angular/core';
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
export class TilesComponent {
  subscription: any;
  displayedColumns: string[] = ['name', 'status'];
  dataSource = [{}]
  alarmsUpdated!: Date
  weatherUpdated!: string

  cardData =[
    {title:"Wind speed",value:-999,color:"green",icon:"air",unit:"m/s"},
    {title:"Temperature",value:-999,color:"green",icon:"thermostat",unit:"°C"},
    {title:"Air pressure",
  value:-999,color:"green",icon:"storm",unit:"hPa"},
    {title:"Wind Direction",
  value :-999,color:"green",icon:"explore",unit:"°"},
  {title:"Air Density",
  value :-999,color:"green",icon:"reorder",unit:"kg/m³"}
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
    private api: APIService
    
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
  })
  this.api.GetFerjeData("alarms").then((data:any)=>{

    this.updateData(data)
  })

 this.subscription= this.api.OnUpdateFerjeDataListener.subscribe((data:any)=>{

    if(data){
     
      let topic = data.value.data.onUpdateFerjeData
      this.updateData(topic)
      
    }

  })
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
  


  }


  updateAlarmData(data:any){

    
   

    this.dataSource =[]
    for(let i in data.Values){
      
      this.dataSource.push({name:i,status:data.Values[i]})
      
    }
    
    

  }

  updateWeatherData(data:any){
    
    this.cardData[0].value = Math.round(data.Values.Vindhastighet) 
    this.cardData[1].value = Math.round(data.Values.Temperatur)
    this.cardData[2].value = Math.round(data.Values.Luft_Trykk)
    this.cardData[3].value =Math.round(data.Values.Vindretning)
    this.cardData[4].value =Math.round(data.Values.Luft_Tetthet)

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.close();
  }
  ngOnDestroy():void{

    this.subscription.unsubscribe()



  }
}


