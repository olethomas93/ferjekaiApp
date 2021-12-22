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
  scope="ais"
  accesstoken ="eyJhbGciOiJSUzI1NiIsImtpZCI6IjBCM0I1NEUyRkQ5OUZCQkY5NzVERDMxNDBDREQ4OEI1QzA5RkFDRjMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJDenRVNHYyWi03LVhYZE1VRE4ySXRjQ2ZyUE0ifQ.eyJuYmYiOjE2NDAwNzUxMzgsImV4cCI6MTY0MDA3ODczOCwiaXNzIjoiaHR0cHM6Ly9pZC5iYXJlbnRzd2F0Y2gubm8iLCJhdWQiOiJhcGkiLCJjbGllbnRfaWQiOiJvbGUudGhlaXNlbkBicmF0dHZhYWctZWxlY3Ryby5ubzpGZXJnZWthaSIsInNjb3BlIjpbImFwaSJdfQ.Rp_RB-tWWMCJWh9dGX9sKDXr224JXJZgNFfe7F5GV1uIG5iUr8-CjfESX8W1kKF4oKMPV9gZTancagqJYVx1UQemRRiJLSIrlFsDyr8eH1yWTL3l8U7v7iu-hS2-PhWbtf-zRc2_e9vm_ykCGHpos4xJtEaYaZ25mAOBCdezskMQkm6g4565mjnqNC7JqsJLLt51jgWtpXBtrGEUFkFo4jNUzuF8B5-sYoF5ogP5xmSEUY6XEK0807xTVBzVZQ42sN9CUaNa6Jgm8PKJm466KRPPNQZqH4VO2o4UHRWPjp43LBQ5wmgEbdTViQrXdRUB_qIyfC8fhX_2wMbevkotjEy_GVHxCjy0w08lFJbjSJFnlNXipk_PZ24jP2O5kSz2Uw-odn4H8WC_cg_WDnAt6gVAjQITMGmlJqN97Gr5DbzG_1XgYWPv5Xi2YMhB8GlXVin6JM6_ZGaJlAl0UrX624LVOHpQHPC7guKSaba7qrHLmfJHYcmjTkcTKHashdSwjPFam0fxaAIGtolSGeXg9zbDpda1aNWDi1MIuV8-6D4-zTga_VY-cgEpf18jESE1c9-1j53z5Txgc0x7Y3Qh-RmgDKxXFVvhdXZ0q0fKrnlWKnxDSMWgbMooRPR6tHwc__gI2FPRY9IqAfLsTeXKQq7EKTNwxcI9taUP_scPxVY"
  client_secret="fergekaibrattvaagelectro"
  grant_type ="client_credentials"
  baseurl ="https://live.ais.barentswatch.no/v1/ais/openposition/"
  private tokenUrl = "https://id.barentswatch.no/connect/token"
  private localurl =window.location.origin

  private bodyjson= { client_id:"ole.theisen@brattvaag-electro.no:Fergekai",
  scope:"ais",
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
        'Content-Type': 'application/x-www-form-urlencoded'

      }
     
  }

  const body = new HttpParams()
      .set('client_id', this.client_id)
      .set('scope', this.scope)
      .set('grant_type', this.grant_type)
      .set('client_secret',this.client_secret);


   return this.http.post(this.tokenUrl,body,httpOptions).pipe(
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

 return this.http.get(`http://live.ais.barentswatch.no/v1/ais/${mmsi}`,httpOptions).pipe(
  catchError(this.handleError)
  
  )
}


}
