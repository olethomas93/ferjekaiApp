import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-ferjekai-status',
  templateUrl: './ferjekai-status.component.html',
  styleUrls: ['./ferjekai-status.component.css']
})
export class FerjekaiStatusComponent implements OnInit {

  gaugeType = "semi";
  gaugeValue = 15;
  gaugeLabel = "Wind";
  gaugeAppendText = "m/s";
  max =40;
  min =0
 

  constructor( public dialogRef: MatDialogRef<FerjekaiStatusComponent>){}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit():void{

    (document.querySelector('.reading-block') as HTMLElement).style.overflow ="visible"

   

  }
}
