import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.css']
})
export class MinicardComponent implements OnInit {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: number;
  @Input() color!: string;
  @Input() isIncrease!: boolean;
  @Input() isCurrency!: boolean;
  @Input() duration!: string;
  @Input() percentValue!: number;

  constructor() { }

  ngOnInit(): void {
  }

}