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
  control,
  DomUtil,
  ZoomAnimEvent,
  Layer,
  MapOptions,
  tileLayer,
  latLng,
  popup,
  svg,
  marker,
  circle
  
  
  
} from 'leaflet';
//'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
  current_position :any 
  current_accuracy:any;
  private light = tileLayer("http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=kartdata3&zoom={z}&x={x}&y={y}", {
    opacity: 0.7,
    maxZoom: 19,
    detectRetina: true,
    attribution:
    '&copy; <a href="http://www.kartverket.no/">Kartverket</a>',
  })

  private dark = tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 0,
    maxZoom: 22,
    subdomains: 'abcd',
    accessToken: '9LqlmfDSOumrgpXSMmlID0SSkehdUKj2ePARzmTJHd5ZGNKGrQCLt0VvWxFZxthG'
  });
 public options = {
    layers: [
     this.light,
    
      


    ],
    zoom: 12,
    renderer:svg(),
    
    center: latLng(62.395288667847396, 6.166532305211625)
  };

  public map!: Map;
  public zoom!: number;
  constructor() {}

  ngOnInit(): void {

  

  }

  onMapReady(map: Map) {
    console.log('map ready');
    this.map = map;
    control.layers({"light":this.light,"dark":this.dark}).addTo(this.map)
    this.map$.emit(map);
    this.map.locate({ setView: true, maxZoom: 10 });
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);

    this.map.on('locationfound',e=>this.onLocationFound(e))

    setInterval(()=>{
      this.map.locate({setView: false, maxZoom: 16});
    },5000)
  }



  onClick(e:any){

   


  }

   onLocationFound(e:any) {
     console.log(e)
    // if position defined, then remove the existing position marker and accuracy circle from the map
    if (this.current_position) {
        this.map.removeLayer(this.current_position);
        this.map.removeLayer(this.current_accuracy);
    }

    var radius = e.accuracy / 2;

    this.current_position = marker(e.latlng).addTo(this.map)
      .bindPopup("Du er her!");

    this.current_accuracy = circle(e.latlng, radius).addTo(this.map);
  }

   onLocationError(e:any) {
    alert(e.message);
  }

   
   

  onMapZoomEnd(e: any) {
    console.log(e.target.getZoom());
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
