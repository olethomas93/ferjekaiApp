import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  private chartData:any
  graph: any
  filteredData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }



  ngOnInit(): void {
  this.chartData =  this.data.chart.items

  this.filteredData = this.filterData(this.chartData)

  this.generateChart(this.filteredData)
  }

  generateChart(data:any){
    this.graph = {
      data: [
          { x: data[0], y: data[1], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
         
      ],
      layout: {width: 500, height: 500, title: 'A Fancy Plot'}
  };


  }

  filterData(data:any){
    

    let timestampArray=[]
    let valueArray =[]

    for(let i in data){

      timestampArray.push(data[i].id)
      
      data[i].data[0] =JSON.parse(data[i].data[0])

      valueArray.push(data[i].data[0][0].value)
    }

    console.log(timestampArray.sort())


return [timestampArray,valueArray]
  }

}
