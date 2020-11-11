import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number;
  @Input()
  max: number;
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
  }
  addQuantity(): void{
    if (this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit('No tenemos tanto stock');
      this.quantityChange.emit(this.quantity);
    }
  }
  decreaseQuantity(): void{
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event){
    if (event.target.value > this.max){
      this.maxReached.emit('No tenemos tanto stock');
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
    }
  }
}
