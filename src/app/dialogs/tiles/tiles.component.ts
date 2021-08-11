import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PubSub } from 'aws-amplify';
import { title } from 'process';
@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent {
  subscription: any;

  cardData =[
    {title:"Wind",value:5,color:"green",icon:"air",unit:"m/s"},
    {title:"Temperature",value:12,color:"green",icon:"thermostat",unit:"°C"},
    {title:"air pressure",
  value:1013,color:"green",icon:"storm",unit:"hPa"},
    {title:"Sea Level",
  value :2,color:"green",icon:"waves",unit:"m"}
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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.subscription =  PubSub.subscribe('1.5.0/Sulesund/TagValues').subscribe({
      next: data =>this.updateData(data.value.TagData[0].Values),
      error: error => console.error(error)
      
  });
  }



  updateData(data:any){

    this.cardData[0].value = Math.round(data.Vindhastighet) 
    this.cardData[1].value = Math.round(data.Temperatur)
    this.cardData[2].value = Math.round(data.Luft_Trykk)


  }

  
  ngOnDestroy():void{

    this.subscription.unsubscribe()



  }
}
