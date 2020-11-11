import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './product-list.services';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  // tslint:disable-next-line: variable-name
  private _cartProducts: Producto[] = [];
  // tslint:disable-next-line: variable-name
  _total = 0;
  // tslint:disable-next-line: variable-name
  _quantity = 0;
  cartProducts: BehaviorSubject<Producto[]> = new BehaviorSubject(this._cartProducts);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject(this._quantity);
  constructor() { }
  addToCart(producto: Producto) {
    const item: Producto = this._cartProducts.find(v => v.nombre === producto.nombre);
    if (!item) {
      this._cartProducts.push({ ...producto });
      this._quantity++;
    } else {
      item.quantity += producto.quantity;
    }
    console.log(this._cartProducts);
    this._cartProducts.forEach(e => {
      this._total += (e.precio * e.quantity);
    });
    this.cartProducts.next(this._cartProducts);
    this.total.next(this._total);
    this.cartQuantity.next(this._quantity);
  }
  submitCart() {
    this._cartProducts = [];
    this._total = 0;
    this._quantity = 0;
    this.cartProducts.next(this._cartProducts);
    this.total.next(this._total);
    this.cartQuantity.next(this._quantity);
  }
}
