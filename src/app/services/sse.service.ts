import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { EventSourcePolyfill } from 'event-source-polyfill';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  
  constructor(private _zone:NgZone) { }


  getEventSource(mmsi:any):Observable<any>{

    
    return new Observable((observer)=>{
      var eventSourceInitDict = {headers: {'Cookie': 'test=test'}};
      let uuid = UUID.UUID();
     let eventSource = new EventSource(`http://localhost:8000/v1/ferry/stream${uuid}?mmsi=${mmsi}`)
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

      

      eventSource.addEventListener("stream",(event:any)=>{
        this._zone.run(()=>{
          //console.log(JSON.parse(event.data))
          let data = JSON.parse(event.data)

          if(data.mmsi == mmsi){

            observer.next(data)
          }
          
        })
      
      })

   

    });
  }


}
