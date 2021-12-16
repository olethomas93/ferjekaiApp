import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  client_id="ole.theisen@brattvaag-electro.no:Fergekai"
  scope="api"
  client_secret="fergekaibrattvaagelectro"
  grant_type ="client_credentials"
  baseurl ="https://www.barentswatch.no/bwapi/v2/ais/openposition/"
  private tokenUrl = "https://id.barentswatch.no/connect/token"
  private localurl =window.location.origin

  private bodyjson= { client_id:"ole.theisen@brattvaag-electro.no:Fergekai",
  scope:"api",
  client_secret:"fergekaibrattvaagelectro",
  grant_type:"client_credentials"}
  token: any;

  constructor(
    private http: HttpClient

  ) {

   }

   authenticate(): Observable<any>{

    console.log(this.localurl)
    const httpOptions = {
      
      headers:{
        'Content-type': 'application/x-www-form-urlencoded'

      }
     
  }

  const body = new HttpParams()
      .set('client_id', this.client_id)
      .set('scope', 'api')
      .set('grant_type', this.grant_type)
      .set('client_secret',this.client_secret);


   return this.http.post(this.localurl+'/api',body,httpOptions).pipe(
    catchError(this.handleError)
     )


   }


   private handleError(error: HttpErrorResponse) {
    
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  setToken(token:any){

    this.token = token
  }

getBoatLocation(mmsi:any){

  const httpOptions = {
      
    headers:{
      'Accept': 'application/json',
      "Authorization": `Bearer ${this.token}`

    }
  }

 return this.http.get(`https://www.barentswatch.no/bwapi/v2/geodata/ais/openposition/${mmsi}`,httpOptions).pipe(
  catchError(this.handleError)
  
  )
}


}
