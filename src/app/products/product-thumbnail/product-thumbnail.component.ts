import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../services/product.model';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
  ]
})
export class ProductThumbnailComponent implements OnInit {
  @Input("pd") product: Product;
  @Output("sd") send: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  AddToCart() {
    this.send.emit(this.product.title);
  }

}
