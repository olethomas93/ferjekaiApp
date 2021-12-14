import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  private tokenUrl = "https://id.barentswatch.no/connect/token"

  constructor(
    private http: HttpClient

  ) {

   }

   authenticate(): Observable<any>{

    let header = new HttpHeaders()
    header.set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin', '*');

   return this.http.post(this.tokenUrl,{client_id:"ole.theisen@brattvaag-electro.no:Fergekai",
    scope:"api",
    client_secret:"fergekaibrattvaagelectro",
    grant_type:"client_credentials"},{headers:header}).pipe(tap(
      error=>console.log(error)
     ))


   }
}
