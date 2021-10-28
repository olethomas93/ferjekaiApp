import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-delete-dock',
  templateUrl: './delete-dock.component.html',
  styleUrls: ['./delete-dock.component.css']
})
export class DeleteDockComponent implements OnInit {

  name!:string;
  
  location!:string;
  constructor(
    private api: APIService

  ) { }

  ngOnInit(): void {
  }


  onSubmit(formValue: any) {


  

    this.api.DeleteDock({id:formValue.name.toLowerCase()}).then((data)=>{

      console.log(data)


      this.api.DeleteDockData({id:data.id})
    }).catch((e:any)=>{
      
     console.log(e)

    })
    
  }
}
