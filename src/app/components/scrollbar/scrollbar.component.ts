import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { latLng, Map} from 'leaflet';
@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {
  @ViewChild('container') el!:ElementRef
  @Input() docks!: Array<any>
  @Input() map!:Map
  scrollItems!: string[];

  isDown!: boolean;
  startX: any;
  scrollLeft: any;
  
  constructor() { }


  ngOnInit(): void {

this.isDown = false;
this. startX;
this.scrollLeft;

   
  }


  flyToDock(location:any){
    this.map.flyTo(latLng(location[0],location[1],14))

  }
  onMouseDown(e:any){
    
    let slider =this.el.nativeElement
    this.isDown = true;
   slider.classList.add('active');
    this.startX = e.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;

  }
  onMouseLeave(e:any){

    let slider = this.el.nativeElement
    this.isDown = false;
    slider.classList.remove('active');
  }

  onMouseMove(e:any){
   
    let slider =this.el.nativeElement
    
    if(!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - this.startX) * 1; //scroll-fast
    slider.scrollLeft = this.scrollLeft - walk;
    console.log(walk);


  }
  onMouseUp(e:any){
    let slider =this.el.nativeElement
    this.isDown = false;
    slider.classList.remove('active');
  }

}
