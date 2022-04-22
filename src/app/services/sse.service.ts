import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { EventSourcePolyfill } from 'event-source-polyfill';


@Injectable({
  providedIn: 'root'
})
export class SseService {

  
  constructor() { }


  getEventSource(mmsi:any):Observable<any>{

    
    return new Observable((observer)=>{
      var eventSourceInitDict = {headers: {'Cookie': 'test=test'}};
     let eventSource = new EventSource(`https://ferrydockapi.herokuapp.com//v1/ferry/stream?mmsi=${mmsi}`)
      
     eventSource.onmessage =(event: { data: any; })=>{
        console.log(event.data)
        
      }

       eventSource.onerror =(error) =>{

        //this.eventSource?.close()
        console.log(error)

      }
      eventSource.onopen=(data)=>{

        console.log("opened connection")
      }

      eventSource.addEventListener('ferry',(event:any)=>{
        console.log(event)
        observer.next(JSON.parse(event.data))
      })

   

    });
  }


}
