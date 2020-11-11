import { Component, OnInit } from '@angular/core';
import { ProductListService, Producto } from '../../services/product-list.services';
import { ProductCartService } from '../../services/product-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productosService: ProductListService,
    private cart: ProductCartService
  ) { }
  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }
  maxReached(text: string) {
    alert(text);
  }
  addToCart(producto: Producto) {
    this.cart.addToCart(producto);
    producto.stock -= producto.quantity;
    producto.quantity = 0;
  }
}
