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
import { AnyAaaaRecord } from 'dns';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { MatDialog } from '@angular/material/dialog';
import {ChartComponent} from '../chart/chart.component'
export interface Alarm {
  name: string;
  value:any
 id:string
}

export interface Alarmconf {
  name: string;
  value:string
 id:string
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
  displayedColumns: string[] = ['id','name', 'status'];
  displayedColumns2: string[] = ['name', 'status'];
  dataSource = [{}]
  
  weatherUpdated!: string
  statusUpdated!: string
  alarmUpdated!: string
  driftUpdated!: string
  alarmsUpdated!: string
 
  editable!:bool;
  alarmConfig!:Alarmconf[]
  weatherData!:weather[];
  alarms!:Alarm[]
  configToggle =false;
  data!:tile[]
  status!:[{}]

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
  isWaiting: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,   
    @Inject(MAT_DIALOG_DATA) public ferrydockName: any,

    public dialogRef: MatDialogRef<TilesComponent>,
    private api: APIService,
    private ref: ChangeDetectorRef,
    public dialog: MatDialog
   
    
    
    ) {

this.alarmConfig =[]
      this.dialogRef.backdropClick().subscribe((data)=>{

        this.dialogRef.close()


      })
  
      this.name = this.ferrydockName;
  }

  ngOnDestroy():void{

    this.subscription.unsubscribe()

    console.log(this.data)

  }

  checkGroup(){
    let temp =false;
   if(localStorage.getItem('group') == "admin" ){

    temp = true;

   }

   return temp
  }

  addMonth(){
    var x = -1; //or whatever offset
    var CurrentDate = new Date();
    CurrentDate.setMonth(CurrentDate.getMonth() + x);
   return CurrentDate.toISOString()
  }


async openChart(name:any){
  

 const data =  await this.getLoggingData([this.addMonth(), new Date().toISOString()])

  this.dialog.open(ChartComponent,{
    
    data:{
      chart:data,
        name:name}
    })
}

  ngOnInit(){

    
 

    




  // this.api.GetDockData(this.ferrydockName.name.toLowerCase()).then((data:any)=>{
  

  //   let updated = new Date(data['updatedAt'])
  //   let date = updated.getFullYear()+'-'+(updated.getDate())+'-'+(updated.getMonth()+1);
  //   let time = updated.getHours() + ":" + updated.getMinutes() + ":" + updated.getSeconds();
  //   this.weatherUpdated = date+' '+time;
  //   this.updateData(data)
  // }).catch((e)=>{

  //   console.log(e)
  // })


  this.subscription=PubSub.subscribe(`fergekai/${this.ferrydockName.name.toLowerCase()}`).subscribe((data)=>{

    this.isWaiting = true
  
  let res = data.value[this.ferrydockName.name.toLowerCase()]
  var dataName = Object.keys(res)[0];

  switch(dataName){

    case "alarms":
      this.updateAlarmData(res.alarms)
    break;

    case "status":
             this.updateStatusData(res.status)
    break

    case "weather":
        this.updateWeatherData(res.weather)
    break;

    case "drift":
          this.updateFerryData(res.drift)
    break;


  }


 })


//  this.subscription= this.api.OnUpdateByIdListener(this.ferrydockName.name.toLowerCase()).subscribe((data:any)=>{


  
//     if(data){
//       let topic = data.value.data.onUpdateById
      
//     let updated = new Date(topic['updatedAt'])
//     let date = updated.getFullYear()+'-'+(updated.getDate())+'-'+(updated.getMonth()+1);
//     let time = updated.getHours() + ":" + updated.getMinutes() + ":" + updated.getSeconds();
//     this.weatherUpdated = date+' '+time;
      
      
//       if(!this.configToggle){
//         this.updateData(topic)
//       }
      
      
//     }

//   })

  }

  ngAfterViewInit(){
 
    this.api.GetDock(this.ferrydockName.name.toLowerCase()).then((data:any)=>{

      this.alarmConfig = data.alarms
    })

  }

 
  async getLoggingData(date:any,nextToken:any=""){


 return await  this.api.ListLoggingTests({ferry:{eq:"sulesund"},createdAt:{between:date}},1000,nextToken)

    
  
  }
 
update(){


this.api.UpdateDock({id:this.ferrydockName.name.toLowerCase(),alarms:this.alarms}).then((data)=>{

  this.alarmConfig = this.alarms
}).catch((error:any)=>{
  console.log(error)
})


}

checkString(value:any){
  let status = (value.toLowerCase() === "true")

  return status
}

config(){

this.configToggle = !this.configToggle


}
close(e:any){
  
  this.dialogRef.close()
  this.ref.detectChanges()
}

getNumbersOfAlarms(){

  return this.alarms.length
}

getdate(){
  let updated = new Date()
      let date = updated.getFullYear()+'-'+(updated.getDate())+'-'+(updated.getMonth()+1);
      let time = updated.getHours() + ":" + updated.getMinutes() + ":" + updated.getSeconds();
      let timestring = date+' '+time;

      return timestring
}

  updateData(data:any){
    
    

     
      
      this.updateWeatherData(data.weather)
      

 
   
      this.updateAlarmData(data.alarms)
   

   
    
      this.updateFerryData(data.drift)

    this.updateStatusData(data.status)
  


  }

  updateFerryData(data:any){
    this.driftUpdated = this.getdate();
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

    this.alarmUpdated = this.getdate();

    let j=0
    let temp =[]
    for(let i in data){
      // let status = (data[i].value.toLowerCase() === "true")
      
      if(this.alarmConfig.length>0){
       
        temp.push({name:this.alarmConfig[j].name ,value:data[i].value,id:data[i].id})
      }else{
        temp.push({name:"udefinert" ,value:data[i].value,id:data[i].id})

      }
      
      j+=1
    }
    
    this.alarms =temp

  }

  updateStatusData(data:any){
    this.statusUpdated = this.getdate();

   this.status = data

  }
  updateWeatherData(data:any){

    this.weatherUpdated = this.getdate();
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




