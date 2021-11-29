import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css']
})
export class HistoricDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public graph = {
    data: [
        {
          x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
          y: [1, 3, 6],
          type: 'scatter'
        },
        
    ],
    layout: {width: 500, height: 400, title: 'Dummy plot'}
};
}
