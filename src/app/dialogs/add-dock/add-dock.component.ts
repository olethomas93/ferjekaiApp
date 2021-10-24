import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { APIService } from '../../API.service';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-add-dock',
  templateUrl: './add-dock.component.html',
  styleUrls: ['./add-dock.component.css']
})



export class AddDockComponent implements OnInit {
  
  name!:string;
  
  location!:string;
  constructor(
    private api: APIService

  ) { }

  ngOnInit(): void {
  }


  onSubmit(formValue: any) {


    console.log(formValue);

    this.api.CreateDock({id:formValue.name,location:[formValue.lat,formValue.lon],name:formValue.name})
    this.api.CreateDockData({id:formValue.name})
  }

}
