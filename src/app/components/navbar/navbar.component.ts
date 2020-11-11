import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/services/product-list.services';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartQuantity$: Observable<number>;
  quantity: number;
  constructor(
    private cart: ProductCartService,
  ) {
    this.cartQuantity$ = cart.cartQuantity.asObservable();
    this.cartQuantity$.subscribe(value => {
      this.quantity = value;
    });
  }

  ngOnInit(): void {
  }

}
