import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any ={};
  @Output() item = new EventEmitter();

  @Input() qty:number = 1;

  addBtn: boolean = false;

  add(){
    this.item.emit({item: this.data, quantity: this.qty});
  }
}
