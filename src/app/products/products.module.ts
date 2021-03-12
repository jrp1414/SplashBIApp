import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  // { path: "productdetails/:id/:title", component: ProductDetailsComponent }
  { path: "productdetails/:id", component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductThumbnailComponent,
    CartComponent,
    TempProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductsModule { }
