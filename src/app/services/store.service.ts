import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '../common/store'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = 'http://localhost:8080/stores';
  constructor(private httpclient : HttpClient) { }
  getStoreList() {
    return this.httpclient.get(this.baseUrl);
  }

  getStoreInfo(id : string) : Observable<Store> {
    let getStoreUrl = this.baseUrl + "/" + id;
    return this.httpclient.get<Store>(getStoreUrl);
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError (
      'Something bad happened; please try again later.');
  };
}

interface GetResponse {
  _embedded: {
    stores: Store[];
  }
}