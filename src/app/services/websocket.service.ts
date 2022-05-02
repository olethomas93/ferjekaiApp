import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})


export class WebsocketService {

  ferrys = this.socket.fromEvent<any>('aisdata');
  constructor(private socket: Socket) { }

ngOnInit(){
this.socket.connect()
  
}


getFerry(mmsi:any){

  
  this.socket.emit('ferrys',mmsi)
}

getEvent(){

  return this.socket.fromEvent('aisdata')
}
}
