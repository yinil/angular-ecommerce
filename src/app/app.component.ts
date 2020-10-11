import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  numInCart: number;
  constructor(private cartService: CartService,
              private userService: UserService) { }
  ngOnInit(): void {
    this.cartService.cast_count.subscribe(
      count => this.numInCart = count
    );
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  logout() {
    this.userService.logout();
  }

  authenticated() {
    let token = localStorage.getItem(this.userService.tokenKey);
    if (token == null || token.length == 0 || this.tokenExpired(token)) {
      return false;
    }
    return true;
    // return this.userService.authenticated;
  }

}
