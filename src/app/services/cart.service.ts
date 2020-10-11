import { Injectable } from '@angular/core';
import { cartItem } from '../common/cartItem';
import { BehaviorSubject } from 'rxjs';
import {OrderFormModel} from '../common/order-form-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count = new BehaviorSubject<number>(0);
  cast_count = this.count.asObservable();
  cart = new BehaviorSubject<Map<String, cartItem>>(new Map<String, cartItem>());
  cast_cart = this.cart.asObservable();
  model: OrderFormModel = new OrderFormModel();
  constructor() { }

  getItems() {
    return this.cart.value;
  }

  add(item, storeId) {
    let map = this.cart.value;
    if (!map.has(item.itemId)) {
      const carit =  {} as cartItem;
      carit.name = item.itemName;
      carit.price = item.itemPrice;
      carit.quantity = 1;
      carit.storeId = storeId;
      map.set(item.itemId, carit);
    } else {
      const carit = map.get(item.itemId);
      carit.quantity += 1;
      map.set(item.itemId, carit);
    }
    this.cart.next(map);
    this.count.next(this.count.value + 1);
    return this.count.value;
  }

  remove(item) {
    if (this.count.value === 0) {
      return 0;
    }
    let map = this.cart.value;
    if (!map.has(item.itemId)) {
      return this.count.value;
    }
    let count = map.get(item.itemId);
    if (count.quantity == 1) {
      map.delete(item.itemId);
    } else {
      count.quantity -= 1;
      map.set(item.itemId, count);
    }
    this.cart.next(map);
    this.count.next(this.count.value - 1);
    return this.count.value;
  }
}
