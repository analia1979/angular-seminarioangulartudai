import { Injectable } from '@angular/core';
export interface Producto {
  nombre: string;
  marca: string;
  precio: number;
  img: string;
  stock: number;
  quantity: number;
}
@Injectable()
export class ProductListService {
  constructor() {
  }
  private productos: Producto[] = [
    {
      nombre: 'Queso Fontina',
      marca: 'La Blanqueada',
      precio: 4500,
      // img: 'https://cdn.jsdelivr.net/gh/TPorcaro/angular-Seminario@master/src/assets/images/mesa-de-cultivo.png',
      img: 'assets/images/quesoFontinaBlanqueada.jpg',
      stock: 0,
      quantity: 0,
    },
    {
      nombre: 'Queso Parmesano',
      marca: 'La Blanqueada',
      precio: 800,
      img: 'assets/images/parmesanoLaBlanqueada.jpg',
      stock: 1,
      quantity: 0,
    },
    {
      nombre: 'Queso Ahumado',
      marca: 'Los Toldos',
      precio: 670,
      img: 'assets/images/quesoLosToldosahumado.jpg',
      stock: 5,
      quantity: 0,
    },
    {
      nombre: 'Queso Gouda Sin Sal',
      marca: 'Los Toldos',
      precio: 700,
      img: 'assets/images/QuesoGoudaSinSalLosToldos.jpg',
      stock: 2,
      quantity: 0,
    },

  ];

  //Originalmente las imagenes estaban guardadas en assets/images pero stackblitz no las visualizaba
  getProductos() {
    return this.productos;
  }
}
