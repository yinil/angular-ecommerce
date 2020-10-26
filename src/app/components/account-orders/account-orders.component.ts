import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-account-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.css']
})
export class AccountOrdersComponent implements OnInit {
  previous = -1;
  next = -2;
  range = [];
  orders = [];
  numberOfPages = 0;
  currpage = 0;

  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.orderService.numberOfOrders().subscribe(
      data => {
        this.numberOfPages = Math.floor((data["data"] - 1) / 10);
        for (var i = 1; i <= this.numberOfPages + 1; i ++) {
          this.range.push(i);
        }
      }
    );
    this.orderService.listOrdersOnPage(0).subscribe(
      data => {
        this.orders = data["data"];
      }
    );
  }

  updateOrders(i) {
    if (i == this.previous) {
      if (this.currpage == 0) {
        return;
      }
      this.currpage -= 1;
    } else if (i == this.next) {
      if (this.currpage == this.numberOfPages) {
        return;
      }
      this.currpage += 1;
    } else {
      this.currpage = i;
    }
    this.orderService.listOrdersOnPage(this.currpage).subscribe(
      data => {
        console.log(data);
        this.orders = data["data"];
      }
    );
  }


}
