import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  detail;
  constructor(private route : ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.orderId = this.route.snapshot.paramMap.get('id');
    } else {
      console.log("[order details] id not given");
      throw new Error("[order details] id not given");
    }
    this.getOrderDetail();
  }

  getOrderDetail() {
    this.orderService.getOrderDetails(this.orderId).subscribe(
      data => {
        this.detail = data["data"];
        console.log(this.detail);
      }
    )
  }

}
