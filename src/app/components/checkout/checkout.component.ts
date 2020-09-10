import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/common/cartItem';
import { OrderFormModel } from 'src/app/common/order-form-model';
import { OrderDetail } from 'src/app/common/order-detail';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService} from '../../services/user.service';
import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  total: number;
  model: OrderFormModel;
  cart: OrderDetail[] = [];
  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.model = {
        name: '',
        zip: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        street1: '',
        street2: '',
        id: '',
        storeid: '',
        items: this.cart
    };
    this.total = 0;
    this.getItems();
    this.getTotal();
  }

  submit() {
    this.model.id = this.userService.userid;
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
        detailQuantity : value.quantity,
      };
      this.cart.push(od);
    });
    this.model.items = this.cart;
  }

  getTotal() {
    this.items.forEach((value: cartItem, key: string) => {
      // console.log(key + " === " + value);
      this.total += value.price * value.quantity;
    });
  }

  goToCheckoutConfirm() {
    this.router.navigate(['/checkout_confirm'], {relativeTo: this.activatedRoute, queryParams: {model: this.model, items: this.items, total: this.total}});
  }
}
