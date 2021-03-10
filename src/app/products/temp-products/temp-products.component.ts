import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'temp-products',
  // providers: [ProductService,LoggerService],
  templateUrl: './temp-products.component.html',
  styles: [
  ]
})
export class TempProductsComponent implements OnInit {

  constructor(private ps: ProductService,private logger:LoggerService) { }

  ngOnInit(): void {
    this.ps.getProducts();
    console.log(this.ps.getProducts());
    this.ps.notify.subscribe((flag) => {
      if (flag) {
        this.logger.log("Logged inside Temp Product");
      }
    });
  }

}
