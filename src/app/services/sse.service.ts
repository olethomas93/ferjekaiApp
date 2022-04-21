import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventSourcePolyfill } from 'event-source-polyfill';


@Injectable({
  providedIn: 'root'
})
export class SseService {
  eventSource:  EventSourcePolyfill | undefined;
  
  constructor() { }


  getEventSource(mmsi:any):Observable<any>{

    
    return new Observable((observer)=>{

     let eventSource = new EventSourcePolyfill('https://ferrydockapi.herokuapp.com/v1/ferry/stream',{
      headers:{
        'mmsi':mmsi
      }
        
        
       
     
      })
      
     eventSource.onmessage =(event: { data: any; })=>{
        
        observer.next(JSON.parse(event.data))
      }

       eventSource.onerror =(error) =>{

        //this.eventSource?.close()
        console.log(error)

      }

      return () =>{

         eventSource.close();
      }

    });
  }

  closeEventSource(){

    this.eventSource?.close();
  }
}
