import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() select_title:string = "";
  @Input() data:any [] = [];
  @Output() selectedValue = new EventEmitter();
  
  detect_changes(event:any){
    this.selectedValue.emit(event);
  }

}
