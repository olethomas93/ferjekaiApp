import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent {


  cardData =[
    {title:"Wind",value:5,color:"green",icon:"air"},
    {title:"Temperature",value:12,color:"green",icon:"thermostat"},
    {title:"air pressure",
  value:1013,color:"green",icon:"storm"},
    {title:"Sea Level",
  value :2,color:"green",icon:"waves"}
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

  constructor(private breakpointObserver: BreakpointObserver) {}
}
