import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        RouterModule,
        AppRoutingModule
    ]
})
export class ProductsModule { }
