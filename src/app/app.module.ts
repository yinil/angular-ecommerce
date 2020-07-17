import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreService } from './services/store.service'
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
// import { pathToFileURL } from 'url';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';

const routes : Routes = [
  {path: 'stores', component: StoreListComponent},
  {path: 'store/:id', component: StoreDetailComponent},
  {path: 'cart', component: CartComponent },
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'test', component: TestComponent},
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
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    TestComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
