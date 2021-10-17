import { Component, Input, OnInit } from '@angular/core';
import { latLng, Map} from 'leaflet';
@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {
  @Input() docks!: Array<any>
  @Input() map!:Map
  scrollItems!: string[];
  
  constructor() { }

  ngOnInit(): void {

   
  }


  flyToDock(location:any){
    this.map.flyTo(latLng(location[0],location[1],14))

  }

}
