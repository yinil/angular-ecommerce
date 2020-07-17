import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/common/cartItem';
import { OrderFormModel } from 'src/app/common/order-form-model';
import { OrderDetail } from 'src/app/common/order-detail';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  total;
  model : OrderFormModel;
  cart : OrderDetail[] = [];
  constructor(
    private cartService : CartService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getTotal();
    this.model = {
        name:'',
        zip: '',
        phone: '',
        email: 'a@email.com',
        city: '',
        state: '',
        street1: '',
        street2: '',
        id: '0112',
        storeid: '123456',
        items: this.cart
    }
  }

  submit() {
    this.items.forEach((value: cartItem, key: string) => {
      // let od = new OrderDetail();
      let od : OrderDetail = {
        detailItem : key,
        detailQuantity : value.quantity
      }
      // od.detailId = key;
      // od.detailQuantity = value.quantity;
      this.cart.push(od);
    });
    this.model.items = this.cart;
    console.log(this.model);
    let url = "http://localhost:8080/order/create";
    this.http.post(url, this.model).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  getItems() {
    this.items = this.cartService.getItems();
  }

  getTotal() {
    this.items.forEach((value: cartItem, key: String) => {
      this.total += value.price * value.quantity;
    })
  }
}
