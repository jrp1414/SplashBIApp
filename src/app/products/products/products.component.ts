import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';
import * as productsJson from "../services/products.json";

@Component({
  selector: 'app-products',
  templateUrl: "./products.component.html",
  styleUrls: ['./products.component.css'],
  providers: [
    // LoggerService, ProductService
  ]
})
export class ProductsComponent {
  productList: Product[] = [];
  product: Product;
  constructor(private logger: LoggerService, private ps: ProductService) {
    // let logger = new LoggerService();
    // logger.log("Test LOg");
    this.productList = this.ps.getProducts();
  }

  filterText: string = "";
  getStyle(product) {
    if (product.rating > 3) {
      return { "background-color": "chartreuse" };
    }
    return { "background-color": "crimson" };
  }

  getClass(product) {
    if (product.rating > 3) {
      // return ["green","bold"];
      return { green: true, bold: true };
    }
    return "red bold";
  }

  ServiceTest() {
    this.ps.notify.emit(true);
  }

  cartProducts: string[] = [];
  Received(data) {
    this.cartProducts.push(data);
  }

  extension: string = ".pdf";

}
