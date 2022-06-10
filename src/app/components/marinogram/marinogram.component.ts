import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marinogram',
  templateUrl: './marinogram.component.html',
  styleUrls: ['./marinogram.component.css']
})
export class MarinogramComponent implements OnInit {

  @Input() coord:any
  constructor(

    private http:HttpClient
  ) { }

  ngOnInit(): void {

    
  }
  ngAfterViewInit(){

    console.log(this.coord);
    
  }
getSource(){

  return `https://jtimeseries.k8s.met.no/jtimeseries-webservices/marinogram?format=png&width=600&height=191&latitude=${this.coord[0]}&longitude=${this.coord[1]}&waterTemperature=true&airTemperature=true&dewpointTemperature=true&pressure=true&waveHeight=true&waveDirection=true&currentDirection=true&currentSpeed=true&windDirection=true&windSpeed=true&timezone=Europe%2FOslo&language=no`
}
}
