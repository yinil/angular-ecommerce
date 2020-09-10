import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.css']
})
export class CheckoutConfirmComponent implements OnInit {
  items;
  model;
  total;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.items = params['items'];
        this.model = params['model'];
        this.total = params['total'];
        console.log(this.items);
        console.log(this.model);
      }
    );
  }

}
