import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductThumbnailComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
