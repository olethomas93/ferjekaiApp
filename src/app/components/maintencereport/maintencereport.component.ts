import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { APIService } from '../../API.service';
import { UUID } from 'angular2-uuid';
import { subscribe } from 'graphql';
import { MatDialog } from '@angular/material/dialog';
import {CreateRapportComponent} from '../create-rapport/create-rapport.component'
import {ReportDialogComponent} from '../report-dialog/report-dialog.component'
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
enum MaintenanceReportStatus {
  done = "done",
  inProgress = "inProgress"
}


@Component({
  selector: 'app-maintencereport',
  templateUrl: './maintencereport.component.html',
  styleUrls: ['./maintencereport.component.css']
})
export class MaintencereportComponent implements OnInit {
 @Input() ferryName! :String
 horizontalPosition: MatSnackBarHorizontalPosition = 'center';
 verticalPosition: MatSnackBarVerticalPosition = 'bottom';
 reportedBy!:string;
 description!:string
 comment!:string

 ferryname: any;
 estatus: typeof MaintenanceReportStatus;
status=[
"done",
"inProgress"
 
]

iStatus:any


 eStatus = MaintenanceReportStatus
 displayedColumns: string[] = ['Forklaring', 'Rapportert av', 'Status', 'Dato','Action'];
 reports:any
 edit =false;
  constructor(
    public dialog: MatDialog,
    private api: APIService,
    private _snackBar: MatSnackBar
    
  ) {

    this.estatus=MaintenanceReportStatus

   }

  ngOnInit(): void {
  

    this.api.ListMaintenanceReports({ferry:{eq:this.ferryName.toLowerCase()}}).then((data)=>{

      this.reports = data.items
      console.log(data)
    })

    this.api.OnDeleteMaintenaceByFerryListener(this.ferryName.toLowerCase()).subscribe((data)=>{
this.listReports()

      })

     this.api.OnCreateMaintenaceByFerryListener(this.ferryName.toLowerCase()).subscribe((data)=>{
      this.listReports()
      
            })

            

        this.api.OnUpdateMaintenaceByFerryListener(this.ferryName.toLowerCase()).subscribe((data)=>{

          this.listReports()
        })


      
      
  }

  listReports(){

    this.api.ListMaintenanceReports({ferry:{eq:this.ferryName.toLowerCase()}}).then((data)=>{

      this.reports = data.items   
      console.log(data)
    })
    
  }

  addReport(data:any){



      //this.submitted = true; 
  
      this.api.CreateMaintenanceReport({status:data.status,date:new Date().toISOString(),reportedBy:data.reportedBy,description:data.description,ferry:this.ferryName.toLowerCase()}).then((data)=>{
  
        console.log(data)
  
  
        this.openSnackBar("Rapport lagt til",'ok',"green")
      }).catch((e:any )=>{
       
        
  
      if(e.errors[0].errorType == "Unauthorized"){
  
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
  




  

  openStatusDialog() {
      

    // this.map.flyTo(latLng(location[0],location[1],10))
    
    const dialogRef = this.dialog.open(CreateRapportComponent,{
      height: '40vh',
      width: '40vw',
      data:{

        name:this.ferryName
    
      }
    });

  

  }

  openDialog(action:any,obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){

        this.addReport(result.data)


       
      }else if(result.event == 'Update'){
        console.log(result.data)
        this.updateReport(result.data)
      }else if(result.event == 'Delete'){
        this.deleteReport(result.data.id)
      
      }
    });
  }


  updateReport(data:any){

    this.api.UpdateMaintenanceReport({id:data.id,reportedBy:data.reportedBy,status:data.status,description:data.description}).then((res)=>{

      console.log(res)
    })

  }
  getReports(){


  }

  deleteReport(id:any){

    this.api.DeleteMaintenanceReport({id:id})



  }
  keys(){

    return Object.keys(this.estatus)
  }

  getComments(){

  }
  addComment(id:any,comment:string){

    this.api.AddComment(id,comment)
    
  
  }

  deleteComment(id:any){

  }

  editReport(id:any){

    this.api.GetMaintenanceReport(id).then((report)=>{

      

    })

  }

}
