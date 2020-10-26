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
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.userService.token
    })
  };

  constructor(
    private http : HttpClient,
    private userService: UserService) { }

  createOrder(model) {
    console.log(this.userService.token);
    if (this.userService.token == null) {
      return null;
    }
    return this.http.post(this.url + '/create', model, this.httpOptions);
  }
  // get total number of orders
  numberOfOrders() {
    let token = this.userService.token;
    if (token == null || token.length == 0) {
      console.log("token not valid");
      return null;
    }
    return this.http.get(this.url + '/numberOfOrders?clientid=' + this.userService.userid, this.httpOptions);
  }
  listOrdersOnPage(page: number) {
    let listUrl = this.url + "/list?clientid=" + this.userService.userid;
    if (page != 0) {
      listUrl += "&page=" + page;
    } 
    return this.http.get(listUrl, this.httpOptions);
  }
  // TODO cancel order
  // TODO get order details
  getOrderDetails(orderid) {
    let detailUrl = this.url + "/detail?clientid=" + this.userService.userid + "&orderid=" + orderid;
    return this.http.get(detailUrl, this.httpOptions);
  }
}
