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
      tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '9LqlmfDSOumrgpXSMmlID0SSkehdUKj2ePARzmTJHd5ZGNKGrQCLt0VvWxFZxthG'})
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

    let latlng = e.latlng
    
    this.coord$.emit(latlng)


  }

  
  onMapZoomEnd(e: any) {
    console.log(e.target.getZoom());
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
