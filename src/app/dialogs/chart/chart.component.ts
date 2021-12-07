import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timeStamp } from 'console';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  private chartData:any
  graph: any
  filteredData: any;
  name: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }



  ngOnInit(): void {
  this.name = this.data.name;
  console.log(this.data.chart)
  this.chartData =  this.data.chart.items

  this.filteredData = this.filterData(this.chartData)

  this.generateChart(this.filteredData)
  }

  generateChart(data:any){
    this.graph = {
      data: [
          { x: data[0], y: data[1], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
         
      ],
      layout: {width: 500, height: 500, title: this.name}
  };


  }

  filterData(data:any){
    

    let timestampArray=[]
    let valueArray =[]
    console.log(data)
    for(let i in data){

      timestampArray.push(data[i].id)
      
      data[i].data =JSON.parse(data[i].data)

      valueArray.push(data[i].data[this.name].value)
    }

    console.log(timestampArray.sort())


return [timestampArray,valueArray]
  }

}
