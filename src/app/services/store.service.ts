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
  // need error handler
  constructor(private httpclient : HttpClient) { }
  
  getStoreList() {
    return this.httpclient.get(this.baseUrl);
  }

  getStoreInfo(id : string) : Observable<Store> {
    let getStoreUrl = this.baseUrl + "/" + id;
    return this.httpclient.get<Store>(getStoreUrl);
  }
  
}