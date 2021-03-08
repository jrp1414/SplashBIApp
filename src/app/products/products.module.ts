import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [ProductsComponent, ProductThumbnailComponent, CartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
