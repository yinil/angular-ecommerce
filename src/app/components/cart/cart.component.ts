import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/common/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Map<String, cartItem>;
  count: number;
  total = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cast_cart.subscribe(
      cart => {
        this.items = cart;
        this.getTotal();
      }
    );
    this.cartService.cast_count.subscribe (
      count => {this.count = count; }
    );
  }

  getTotal() {
    this.items.forEach((value: cartItem, key: string) => {
      this.total += value.price * value.quantity;
    });
  }

}
