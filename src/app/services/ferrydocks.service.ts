import { Injectable } from '@angular/core';
import {ferrydock} from './ferrydock'
import { APIService } from '../API.service';
@Injectable({
  providedIn: 'root'
})
export class FerrydocksService {

ferrydocks! :Array<ferrydock>


  constructor(

    private api: APIService,
  ) { 




  }


  addFerryDock(ferrydock:ferrydock){

    this.ferrydocks.push(ferrydock)
  }


  getAllFerrydocks(){


  }
}
