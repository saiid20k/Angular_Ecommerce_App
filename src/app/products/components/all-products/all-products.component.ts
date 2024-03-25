import { Component, NgModule, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})




export class AllProductsComponent implements OnInit{

  @NgModule({
    imports: [
      RouterModule,
      AppRoutingModule
    ], 
    exports: [
      RouterModule,
      AppRoutingModule
    ]

})



  products: Array<any> = [];
  categories: Array<any> = [];
  loading: boolean = false;
  constructor(private Service:ProductsService){}
  // Get Products
  getProducts(){
    this.loading = true;
    this.Service.getAllProducts().subscribe((res:any) => {
      this.loading = false;
      this.products = res;
      // console.log(res);
    }, error => {
      this.loading = false;
      // console.log(error);
    });
  }
  // Get Categories
  getCategories(){
    this.loading = true;
    this.Service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
      this.loading = false;
      // console.log(res);
    }, error => {
      this.loading = false;
      // console.log(error);
    });
  }


  filter(event:any){
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsbyCategory(value); 
    // console.log(value);
  }

  // Get Products By Categories
  getProductsbyCategory(keyword:string){
    this.loading = true;
    this.Service.getAllProductsByCategory(keyword).subscribe((res:any) => {
      this.loading = false;
      this.products = res;
      // console.log(res);
    }, error => {
      this.loading = false;
      // console.log(error);
    });
  }

  cartProducts: any = [];
      
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find((item: {
        [x: string]: any; id: any; 
}) => item['item'].id == event.item.id);      
      if(exist){
        alert("This Item is alredy in Your Cart!..")
      }
      else{
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }







  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

}
