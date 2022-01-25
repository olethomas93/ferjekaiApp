import { Component, Inject, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

enum MaintenanceReportStatus {
  done = "done",
  inProgress = "inProgress"
}

interface Status {
  done: string;
  inProgress: string;
}

@Component({
  selector: 'app-create-rapport',
  templateUrl: './create-rapport.component.html',
  styleUrls: ['./create-rapport.component.css']
})


export class CreateRapportComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  name!:string;
  description!:string
  comment!:string
  iStatus :any
  ferryname: any;
  estatus: typeof MaintenanceReportStatus;
status=[
"done",
"inProgress"
  
]
  constructor(
    @Inject(MAT_DIALOG_DATA) public ferrydockName: any,
    private api: APIService,
    private _snackBar: MatSnackBar
  ) {

this.estatus=MaintenanceReportStatus
    this.ferryname = this.ferrydockName.name
   }

  ngOnInit(): void {
  }

  keys(){

    return Object.keys(this.estatus)
  }
  onSubmit(formValue: any) {


  

    this.api.CreateMaintenanceReport({status:this.iStatus,date:new Date().toISOString(),reportedBy:formValue.name,description:formValue.description,ferry:this.ferryname.toLowerCase()}).then((data)=>{

      console.log(data)


      this.openSnackBar("Rapport lagt til",'ok',"green")
    }).catch((e:any )=>{
     
      if (e.errors[0].errorType=="DynamoDB:ConditionalCheckFailedException"){
        this.api.UpdateDock({id:formValue.name.toLowerCase(),location:[formValue.lat,formValue.lon],name:formValue.name}).then((data)=>{



          this.api.UpdateDockData({id:data.id}).then(()=>{

            this.openSnackBar("Rappport oppdatert",'ok',"green")
      
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
