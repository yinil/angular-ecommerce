import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/common/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items : Map<String, cartItem>;
  total = 0;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.getTotal();
  }

  // TODO: findone product price Spring boot backend BuyerProductController
  getPrices() {

  }

  // TODO: calculate total
  getTotal() {
    this.items.forEach((value: cartItem, key: String) => {
      this.total += value.price * value.quantity;
    })
  }

}
