import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { cartItem } from '../common/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Map<String, cartItem> = new Map();
  constructor() { }
  // addToCart(item) {
  //   this.items.push(item);
  // }
  getItems() {
    return this.cart;
  }
  clearCart() {
    this.cart = new Map();
    return this.cart;
  }
  addToCart(item) {
    console.log("before add: "+ this.cart.size);
    if (!this.cart.has(item.itemId)) {
      console.log(0);
      const carit =  {} as cartItem;
      carit.name = item.itemName;
      carit.price = item.itemPrice;
      carit.quantity = 1;
      this.cart.set(item.itemId, carit);
      console.log(this.cart.get(item.itemId).quantity);
    } else {
      console.log(this.cart.get(item.itemId).quantity);
      const carit = this.cart.get(item.itemId);
      carit.quantity += 1;
      this.cart.set(item.itemId, carit);
      console.log(this.cart.get(item.itemId).quantity);
    }
    console.log("after add: " + this.cart.size);
  }
  removeFromCart(item) {
    console.log("before remove: "+ this.cart.size);
    if (!this.cart.has(item.itemId)) {
      return false;
    }
    let count = this.cart.get(item.itemId);
    if (count.quantity == 1) {
      this.cart.delete(item.itemId);
      return true;
    }
    count.quantity -= 1;
    this.cart.set(item.itemId, count);
    console.log("after remove: " + this.cart.size);
    return true;
  }
}
