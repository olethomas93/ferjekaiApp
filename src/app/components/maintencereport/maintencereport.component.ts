import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { APIService } from '../../API.service';
import { UUID } from 'angular2-uuid';
import { subscribe } from 'graphql';
import { MatDialog } from '@angular/material/dialog';
import {CreateRapportComponent} from '../create-rapport/create-rapport.component'

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

 eStatus = MaintenanceReportStatus
 displayedColumns: string[] = ['Forklaring', 'Rapportert av', 'Status', 'Dato','Action'];
 reports:any
  constructor(
    public dialog: MatDialog,
    private api: APIService
  ) {



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
      
  }

  listReports(){

    this.api.ListMaintenanceReports({ferry:{eq:this.ferryName.toLowerCase()}}).then((data)=>{

      this.reports = data.items   
      console.log(data)
    })
    
  }

  addReport(){

    this.openStatusDialog()

    // this.api.CreateMaintenanceReport({ferry:this.ferryName.toLowerCase(),reportedBy:"Ole",description:"oljelekkasje",id:UUID.UUID(),date:new Date().toISOString(),status:this.eStatus.inProgress}).then(()=>{

    //   this.listReports()
    // })



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

  getReports(){


  }

  deleteReport(id:any){

    this.api.DeleteMaintenanceReport({id:id})



  }

  getComments(){

  }
  addComment(id:any,comment:string){

    this.api.AddComment(id,comment)
    
  
  }

  deleteComment(id:any){

  }

  editReport(id:any){

  }

}
