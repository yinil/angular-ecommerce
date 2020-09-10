import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {
  @Input() items;
  @Input() total;
  constructor() { }

  ngOnInit(): void {
  }

}
