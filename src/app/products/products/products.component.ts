import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { cartAction, CartInfo } from 'src/app/store/cart.action';
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
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  product: Product;
  constructor(private logger: LoggerService,
    private ps: ProductService,
    private store: Store) {
    // let logger = new LoggerService();
    // logger.log("Test LOg");
    this.ps.getProducts().subscribe(products => this.productList = products as Product[]
      , error => console.error(error));
  }
  ngOnInit(): void {
    this.store.subscribe(s => {
      let titles = (<CartInfo>s["cartR"]).titles;
      this.cartProducts = titles ? titles : [];
    });
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
    //this.cartProducts = Object.assign([],this.cartProducts);
    this.cartProducts = [...this.cartProducts, data];
    //this.cartProducts.push(data);
    var cart: CartInfo = { titles: this.cartProducts };
    this.store.dispatch(cartAction({ cart }));
  }

  extension: string = ".pdf";

}
