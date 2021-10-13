import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-dock',
  templateUrl: './create-dock.component.html',
  styleUrls: ['./create-dock.component.css']
})
export class CreateDockComponent implements OnInit {
  name!:string;
  
  location!:string;


  constructor() { }

  ngOnInit(): void {
  }


  register(){

    
  }

}
