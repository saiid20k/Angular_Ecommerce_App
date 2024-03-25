import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartProducts: any [] = [];
  success:boolean = false;
  totalCart: any = 0;
  getCart(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartProducts);
    this.getTotalCar()
  }

  getTotalCar(){
    this.totalCart = 0 ;
    for(let x in this.cartProducts){
      this.totalCart += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }


  index: number = 0

  minusQty(index:number){
    this.cartProducts[index].quantity --;
    this.getTotalCar();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  addQty(index:number){
    this.cartProducts[index].quantity ++;
    this.getTotalCar();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  detectChange(){
    this.getTotalCar();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  delteItem(index:number){
    this.getTotalCar();
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart(){
    this.getTotalCar();
    this.cartProducts = [];
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  addCart(){
    let products = this.cartProducts.map(item=> {
      return {ProductID : item.item.id, quantity: item.quantity}
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    }
    console.log(model)
    this.success = true;
  }


  
  ngOnInit(): void {
    this.getCart()
    
  }

}
