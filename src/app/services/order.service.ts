import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:8080/order";
  constructor(
    private cartService : CartService,
    private http : HttpClient
  ) { }

  createOrder(model) {
    return this.http.post(this.url + "/create", model);
  }
}
