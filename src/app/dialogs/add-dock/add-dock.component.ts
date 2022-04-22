import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  name!:string;
  
  location!:string;
  constructor(
    private api: APIService,
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
  }


  onSubmit(formValue: any) {


  

    this.api.CreateDock({id:formValue.name.toLowerCase(),location:[formValue.lat,formValue.lon],name:formValue.name}).then((data)=>{

      console.log(data)


      this.api.CreateDockData({id:data.id}).then(()=>{

        this.openSnackBar("Fergekai lagt til",'ok',"green")
      })
    }).catch((e:any )=>{
     
      if (e.errors[0].errorType=="DynamoDB:ConditionalCheckFailedException"){
        this.api.UpdateDock({id:formValue.name.toLowerCase(),location:[formValue.lat,formValue.lon],name:formValue.name}).then((data)=>{



          this.api.UpdateDockData({id:data.id}).then(()=>{

            this.openSnackBar("Fergekai oppdatert",'ok',"green")
      
          })


         
        })

      }else if(e.errors[0].errorType == "Unauthorized"){

        this.openSnackBar(e.errors[0].errorType,'close',"red")
        console.log('unauthorized')
        
      }
      

    }).catch((e:any)=>{
      console.log(e)

    }) 
    
  }

  openSnackBar(message: string, action: string,color:string) {
    this._snackBar.open(message, action,{duration:3000,panelClass:[color],verticalPosition:this.verticalPosition,horizontalPosition:this.horizontalPosition});
  }

}
