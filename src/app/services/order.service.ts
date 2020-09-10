import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {UserService} from './user.service';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:8080/order";
  constructor(
    private cartService : CartService,
    private http : HttpClient,
    private userService: UserService
  ) { }

  createOrder(model) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: stringify(this.userService.token)
      })
    };
    return this.http.post(this.url + '/create', model, httpOptions);
  }
}
