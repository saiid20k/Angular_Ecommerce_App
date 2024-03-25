import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  loading: boolean = false
  id: any
  data: any = [];
  constructor(private Route:ActivatedRoute, private services: ProductsService){
    this.id = this.Route.snapshot.paramMap.get("id")
    console.log(this.id)
  }


  getproduct(){
    this.loading = true
    this.services.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res;
      console.log(res)
    }, error =>{
      this.loading = false
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getproduct()
    
  }
}
