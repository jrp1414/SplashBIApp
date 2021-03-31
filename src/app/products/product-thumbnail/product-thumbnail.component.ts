import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
  ]
})
export class ProductThumbnailComponent implements OnInit {
  @Input("pd") product: Product;
  @Output("sd") send: EventEmitter<string> = new EventEmitter();
  date: Date = new Date();
  constructor(private logger: LoggerService, private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.notify.subscribe((flag) => {
      if (flag) {
        this.logger.log("Logged inside Thumbnail");
      }
    });
  }

  AddToCart() {
    // this.logger.log(this.product.title + " added to cart");
    this.send.emit(this.product.title);
  }

}
