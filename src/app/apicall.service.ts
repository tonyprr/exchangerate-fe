import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Conversion } from './conversion';
import { ConversionRequest } from './conversion-request';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private httpClient: HttpClient) {}

  conversion(request: ConversionRequest): Observable<Conversion>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
//    headers.append('GET', 'POST', 'OPTIONS');

    let options = {
      headers: headers
    };        

    return this.httpClient.post<ConversionRequest>(
      'http://localhost:8090/exchangerate/conversion', request, options
      ).pipe(
           map((data: Conversion) => {
             return data;
           }), catchError( error => {
             console.log(error);
             return throwError( 'Error!' );
           })
        )
    }
}
