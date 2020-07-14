import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/common/store';
import { Product } from 'src/app/common/product';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  store : Store;
  items : Product[];
  storeId : string;
  constructor(private storeService : StoreService,
              private route : ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.storeId = this.route.snapshot.paramMap.get('id');
      console.log(this.storeId);
    } else {
      console.log("[list stores] id not given");
      throw new Error("[list stores] id not given");
    }
    this.route.paramMap.subscribe(() => {
      this.getStoreInfo();
    })
  }

  getStoreInfo() {
    this.storeService.getStoreInfo(this.storeId).subscribe(
      data => {
        console.log(data);
        this.store = data['data']['store'];
        this.items = data['data']['items'];
        console.log(this.store);
        console.log(this.items);
      }
    )
  }

  addToCart(item) {
    console.log(item.itemId);
    this.cartService.addToCart(item);
    // need to prompt added to cart
  }
  removeFromCart(item) {
    console.log(item.itemId);
    console.log(this.cartService.removeFromCart(item));
  }
}
