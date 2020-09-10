import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/common/cartItem';
import { OrderFormModel } from 'src/app/common/order-form-model';
import { OrderDetail } from 'src/app/common/order-detail';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  total;
  model: OrderFormModel;
  cart: OrderDetail[] = [];
  constructor(
    private orderService: OrderService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.model = {
        name: '',
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
    };
    this.getItems();
    this.getTotal();
  }

  submit() {
    console.log(this.model);
    this.orderService.createOrder(this.model).subscribe(
      data => console.log(data)
    );
  }

  getItems() {
    this.items = this.cartService.getItems();
    this.cart = [];
    this.items.forEach((value: cartItem, key: string) => {
      const od: OrderDetail = {
        detailItem : key,
        detailQuantity : value.quantity
      };
      this.cart.push(od);
    });
    this.model.items = this.cart;
  }

  getTotal() {
    this.items.forEach((value: cartItem, key: string) => {
      this.total += value.price * value.quantity;
    });
  }
}
