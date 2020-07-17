import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numInCart : number;
  constructor(private cartService : CartService) {}
  ngOnInit(): void {
    this.cartService.cast_count.subscribe(
      count => this.numInCart = count
    )
  }

}
