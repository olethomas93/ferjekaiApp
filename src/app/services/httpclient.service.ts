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
  accesstoken ="eyJhbGciOiJSUzI1NiIsImtpZCI6IjBCM0I1NEUyRkQ5OUZCQkY5NzVERDMxNDBDREQ4OEI1QzA5RkFDRjMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJDenRVNHYyWi03LVhYZE1VRE4ySXRjQ2ZyUE0ifQ.eyJuYmYiOjE2Mzk3NTA2NTAsImV4cCI6MTYzOTc1NDI1MCwiaXNzIjoiaHR0cHM6Ly9pZC5iYXJlbnRzd2F0Y2gubm8iLCJhdWQiOiJhcGkiLCJjbGllbnRfaWQiOiJvbGUudGhlaXNlbkBicmF0dHZhYWctZWxlY3Ryby5ubzpGZXJnZWthaSIsInNjb3BlIjpbImFwaSJdfQ.HWmfgJh5kzQkjBtzFkpRHPfsKkCV2o8y9FBi73pg4o8ZrR-1khAwYuk5C7M2N5mHnXqsyXKDaV5Niu6L8VFI-1TyY6mQwk--Q5xmINln_R14MZAyzjU6nKmwzhAoUPVBo4-XkBHdF6acZWkCxdXolrt6orpI5MsPwJIGcn91dDR5sf2PFBMjS2qPE578yF-epSw1t1yziEfcAjSrIKlFcHAuKkxpymBJN-nbownmEdL1_IMiEWvnTSbjPnbf1fdi-lFws8VMsk63-hh1o8rpjE7se0w3PxWsuBPNnl7VRm4O-fq2aA98k9Vnh_K5cIU4afi2g5grwTW3fCIEUMk0AMfqmSfHs6_JX6Gf6U2xDz-0l_iFVKY_rRozMEcDcaluZ5DlCchhw_eulQefqg7xlpPgDbVwIyCvp4gjXj3eC1pgn0rgsV2jVtkZ_AB6EuKJ7tqsr7wj5LkLYxS-TOsjigYIM1JQ6PVTOfQWbR4Swr6DlCnu3c0EEv4998e6H_M8ykxYke6l-owyCOErY4BKxDnY_qvkCF_DYVCyt71MrxhPSQxpyJgmM9Jpif7-RtYO30u4q7BfUKo5xUlGRdiFAoaNtFeO-Har7rpjXMDvcBTFcjrwdDIMfTqgRHxUDKEeh7RTlwONveIsWxmPJUBwT8cC7yUuz8FqSr1AnNyGREk"
  client_secret="fergekaibrattvaagelectro"
  grant_type ="client_credentials"
  baseurl ="https://www.barentswatch.no/bwapi/v2/ais/openposition/"
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
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Headers": "Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With",
"Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
"Access-Control-Allow-Origin": "*"

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
      "Authorization": `Bearer ${this.accesstoken}`

    }
  }

 return this.http.get(`https://www.barentswatch.no/bwapi/v2/geodata/ais/openposition/${mmsi}`,httpOptions).pipe(
  catchError(this.handleError)
  
  )
}


}
