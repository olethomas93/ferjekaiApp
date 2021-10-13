import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  Map,
  Control,
  DomUtil,
  ZoomAnimEvent,
  Layer,
  MapOptions,
  tileLayer,
  latLng,
  popup
  
  
} from 'leaflet';

declare let L:any
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Output() map$: EventEmitter<Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  @Output() coord$: EventEmitter<any> = new EventEmitter();
 public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoom: 12,
    center: latLng(62.395288667847396, 6.166532305211625),
  };

  public map!: Map;
  public zoom!: number;
  constructor() {}

  ngOnInit(): void {



  }

  onMapReady(map: Map) {
    console.log('map ready');
    this.map = map;
    this.map$.emit(map);
    //this.map.locate({ setView: true, maxZoom: 16 });
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
    

  }



  onClick(e:any){

   


  }

  
  onMapZoomEnd(e: any) {
    console.log(e.target.getZoom());
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
