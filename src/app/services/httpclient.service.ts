import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  client_id="ole.theisen@brattvaag-electro.no:Fergekai"
  scope="api"
  client_secret="fergekaibrattvaagelectro"
  grant_type ="client_credentials"
  private tokenUrl = "https://id.barentswatch.no/connect/token"

  constructor(
    private http: HttpClient

  ) {

   }

   authenticate(): Observable<any>{
    const headerDict = {
      
      
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': "true"
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };


 let body =`client_id=${this.client_id}&scope=api&client_secret=${this.client_secret}&grant_type=${this.grant_type}`
   
   return this.http.post<any>(this.tokenUrl,body,requestOptions).pipe(tap(
      error=>console.log(error)
     ))


   }
}
