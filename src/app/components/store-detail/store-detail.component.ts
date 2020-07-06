import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/common/store';
import { Product } from 'src/app/common/product';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

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
              private route : ActivatedRoute) { }

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

}
