import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  @Input() type!: any;
  @Input() label!: string;
  @Input() value!: number;
  @Input() unit!: string;
  @Input() min!: number;
  @Input() max!: number;

  gaugeType:any = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";

  constructor() { }

  ngOnInit(): void {
  }

}
