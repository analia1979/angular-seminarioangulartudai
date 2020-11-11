import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: 'products',
  pathMatch: 'full'
},
{
  path: 'products',
  component: ProductListComponent
},
{
  path: 'cart',
  component: ProductCartComponent
},
{
  path: 'about',
  component: AboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
