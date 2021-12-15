import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
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

  private bodyjson= { client_id:"ole.theisen@brattvaag-electro.no:Fergekai",
  scope:"api",
  client_secret:"fergekaibrattvaagelectro",
  grant_type:"client_credentials"}

  constructor(
    private http: HttpClient

  ) {

   }

   authenticate(): Observable<any>{
    const headerDict = {
      
      
      'content-type': "application/x-www-form-urlencoded",
      'cache-control': 'no-cache',
      
    }
    const header = new HttpHeaders();

    header.append("Content-Type","application/x-www-form-urlencoded")
    header.append('Access-Control-Allow-Origin','*')
   
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
      withCredentials:true
      
    };






 let body =`client_id=${this.client_id}&scope=api&client_secret=${this.client_secret}&grant_type=${this.grant_type}`
   
   return this.http.post<any>(this.tokenUrl,body,{headers:header,withCredentials:true}).pipe(tap(
      error=>console.log(error)
     ))


   }
}
