import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hmi',
  templateUrl: './hmi.component.html',
  styleUrls: ['./hmi.component.css']
})
export class HmiComponent implements OnInit {
  @Input() data:any
  @ViewChild('tank') tank!:  ElementRef

  oilLevel ="1000"
  oilTemp="58"
  levelOil=0.5
  changeLevel=""

  
  constructor(private renderer: Renderer2) {


    
   }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChanges){

    
    
    this.renderer.setStyle(this.tank.nativeElement,'transform',`scaleY(${this.data[2].value/1000})`)


  }

  ngAfterViewInit(){

    

    
    
  }

}
