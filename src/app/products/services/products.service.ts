import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=20')
  }

  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }


  getAllProductsByCategory(keyword: string){
    return this.http.get('https://fakestoreapi.com/products/category/'+keyword);
  }


  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }



}
