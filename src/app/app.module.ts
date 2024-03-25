import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AllProductsComponent} from "./products/components/all-products/all-products.component";
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ProductsService } from './products/services/products.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponentComponent,
    ],
    providers: [
        ProductsService
    ],
    bootstrap: [AppComponent],
    imports: [
        // AllProductsComponent,
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        ProductsModule,
        CartModule,

    ]


    
})
export class AppModule { }
