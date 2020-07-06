import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/common/store';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  constructor(private storeService: StoreService) { }
  stores;

  ngOnInit(): void {
    this.listStores();
  }

  listStores() {
    this.storeService.getStoreList().subscribe(
      data => {
        console.log(data);
        this.stores = data['data'];
      }
    )
  }

}
