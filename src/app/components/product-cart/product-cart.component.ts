import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../../services/product-cart.service';
import { Producto } from '../../services/product-list.services';
//import swal from 'sweetalert';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  cartProducts$: Observable<Producto[]>;
  total$: Observable<number>;
  constructor(
    private cart: ProductCartService,
  ) {
    this.cartProducts$ = cart.cartProducts.asObservable();
    this.total$ = cart.total.asObservable();
  }

  ngOnInit(): void {
  }
  submitCart() {
    this.cart.submitCart();
    // swal('Gracias por su compra!', '', 'success');
  }
}
