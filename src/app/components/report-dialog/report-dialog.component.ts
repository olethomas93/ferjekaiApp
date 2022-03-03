import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface report {
  name: string;
  id: number;
}


@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {
  action:string;
  local_data:any;
  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: report)

  
    { 

      this.local_data = {...data};
      this.action = this.local_data.action;

    }

  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){

    
    this.dialogRef.close({event:'Cancel'});
  }

}
