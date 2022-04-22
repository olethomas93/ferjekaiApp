import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { EventSourcePolyfill } from 'event-source-polyfill';


@Injectable({
  providedIn: 'root'
})
export class SseService {

  
  constructor(private _zone:NgZone) { }


  getEventSource(mmsi:any):Observable<any>{

    
    return new Observable((observer)=>{
      var eventSourceInitDict = {headers: {'Cookie': 'test=test'}};
     let eventSource = new EventSource(`https://ferrydockapi.herokuapp.com/v1/ferry/stream?mmsi=${mmsi}`)
     //https://ferrydockapi.herokuapp.com
     eventSource.onmessage =event =>{
      this._zone.run(()=>{
        console.log(event)
       
      })
   
        
      }

       eventSource.onerror =(error) =>{

        this._zone.run(()=>{
          console.log(error)
         
        })

        //this.eventSource?.close()
     

      }
      eventSource.onopen=(data)=>{
        this._zone.run(()=>{
          console.log("opened connection")
         
        })
      
      }

      

      eventSource.addEventListener(String(mmsi),(event:any)=>{
        this._zone.run(()=>{
          console.log(JSON.parse(event.data))
          observer.next(JSON.parse(event.data))
        })
      
      })

   

    });
  }


}
