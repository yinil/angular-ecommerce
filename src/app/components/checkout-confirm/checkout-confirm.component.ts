import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {UserService} from '../../services/user.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.css']
})
export class CheckoutConfirmComponent implements OnInit {
  model;
  total: number;
  constructor(private cartService: CartService,
              private userService: UserService,
              private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.total = 0;
    this.model = this.cartService.model;
    this.getTotal();
    console.log(this.model);
  }

  getTotal() {
    if (this.model.items) {
      this.model.items.forEach((item) => {
        this.total += item.detailPrice;
      });
    }
  }

  submit() {
    this.model.id = this.userService.userid;
    this.orderService.createOrder(this.model).subscribe(
      data => console.log(data)
    );
  }

}
