import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/common/cartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  total;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getTotal();
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
