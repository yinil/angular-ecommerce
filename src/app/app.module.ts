import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { HttpClientModule} from '@angular/common/http'
import { StoreService } from './services/store.service'
import { Routes, RouterModule } from '@angular/router';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { pathToFileURL } from 'url';

const routes : Routes = [
  {path: 'stores', component: StoreListComponent},
  {path: 'store/:id', component: StoreDetailComponent},
  {path: 'cart', component: CartComponent },
  {path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo: '/stores', pathMatch: 'full'},
  {path: '**', redirectTo: '/stores', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StoreListComponent,
    StoreDetailComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
