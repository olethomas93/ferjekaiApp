import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { latLng, Map} from 'leaflet';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() docks!: Array<any>
  @Input() map!:Map
  scrollItems!: string[];

  constructor() {}


  flyToDock(location:any){
    this.map.flyTo(latLng(location[0],location[1],14))

  }
}
