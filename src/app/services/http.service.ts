import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _baseUrl: string;
  private _http: HttpClient;
  public stopstream$ = new Subject();
  public stopGps$ = new Subject();

  public gpsData =  new Subject<any>();
  constructor(private http: HttpClient) {
    this._http = http;
    this._baseUrl = environment.httpEndpoint;
  }

  getGpsData(): Observable<any> {
    return this._http.get(this._baseUrl + '/gps/').pipe(tap(
     error=>console.log(error)
    ))
  }


  getImageData(): Observable<any> {
    return this._http.get(this._baseUrl + '/capturing/').pipe(tap(
     error=>console.log(error)
    ))
  }

  getStorageData(): Observable<any> {
    return this._http.get(this._baseUrl + '/storage/')
  }

  start1(trip:any): Observable<any> {
    return this._http.post(this._baseUrl + '/start1/',trip).pipe(tap(
      
    ))
  }
  start2(trip:any): Observable<any> {
    return this._http.post(this._baseUrl + '/start2/',trip).pipe()
  }
  start3(trip:any): Observable<any> {
    return this._http.post(this._baseUrl + '/start3/',trip).pipe(
    )
  }

  connectFps(port:any): Observable<any> {
    return this._http.post(this._baseUrl + '/connectFPS/',port).pipe(
    )
  }

  startGpsLoop(): Observable<any> {
    return this._http.get(this._baseUrl + '/gpsLoop/');
  }

  stop(): Observable<any> {
    return this._http.get(this._baseUrl + '/stop');
  }


  getLiveStream(): Observable<any> {
    return this._http.get(this._baseUrl + '/video_feed1/')
  }

  getFPS(): Observable<any> {
    return this._http.get(this._baseUrl + '/RaspFPS/')
  }

  Getcoordinates(): Observable<any> {
    return this._http.get(this._baseUrl + '/GetCoordinates/')
  }

  getStates(): Observable<any> {
    return this._http.get(this._baseUrl + '/getStates/')
  }

  
  setFPS(fps:any): Observable<any> {
    return this._http.post<any>(this._baseUrl + '/changeFps/',fps).pipe(tap(error=>console.log(error)))
  }

  stopFeed(): Observable<any> {
    return this._http.get(this._baseUrl + '/stopFeed/')
  }
  merge(): Observable<any> {
    return this._http.get(this._baseUrl + '/merge/')
  }

  getRoadReference(latlong:any):Observable<any>{

    const headerDict = {
      
      'Accept': 'application/vnd.vegvesen.nvdb-v3+json',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    let lat = latlong.lat
    let lon = latlong.lng


    return this._http.get(`https://nvdbapiles-v3.atlas.vegvesen.no/posisjon?lat=${lat}&lon=${lon}`,requestOptions)
  }
  getpositonRoadRef(ref:any):Observable<any>{

    const headerDict = {
      
      'Accept': 'application/vnd.vegvesen.nvdb-v3+json',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    


    return this._http.get(`https://nvdbapiles-v3.atlas.vegvesen.no/veg?vegsystemreferanse=${ref}`,requestOptions)
  }

}
