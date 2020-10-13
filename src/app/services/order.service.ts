import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:8080/order";
  constructor(
    private http : HttpClient,
    private userService: UserService
  ) { }

  createOrder(model) {
    console.log(this.userService.token);
    if (this.userService.token == null) {
      return null;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.token
      })
    };
    return this.http.post(this.url + '/create', model, httpOptions);
  }
  // TODO get order list
  // TODO cancel order
  // TODO get order details
}
