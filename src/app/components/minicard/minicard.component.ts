import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.css'],

})
export class MinicardComponent implements OnInit {
  @ViewChild('compass') angle!: ElementRef<HTMLInputElement>
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: number;
  @Input() color!: string;
  @Input() isIncrease!: boolean;
  @Input() isCurrency!: boolean;
  @Input() duration!: string;
  @Input() unit!: string;
  @Input() edit!: boolean;
  @Input() rotation!: number;
  @Input() isRotated!: boolean;
  compass!: HTMLElement | null;
  degree: any;
  direction:any
  

  constructor(

    private renderer: Renderer2,
    private elRef:ElementRef
  ) { 

    


  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){

    if(this.isRotated){
  
      this.direction = this.degreeToDirection(this.value)
  
      
    } 
  
 
  }

  ngAfterViewInit(){
  
  }

  degreeToDirection(value:any){

    let val = ((value/22.5)+0.5);
    let round = Math.round(val)
    let arr=["N","NNØ","NØ","ØNØ","Ø","ØSØ", "SØ", "SSØ","S","SSV","SV","VSV","V","VNV","NV","NNV"]
    
    return arr[round%16]
  }




}
