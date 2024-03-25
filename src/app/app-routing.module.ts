import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/component/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes : Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'products', component: AllProductsComponent},
  {path: 'products/details/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  // {path: '**', redirectTo: AllProductsComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
