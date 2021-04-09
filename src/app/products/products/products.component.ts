import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddToCart } from 'src/app/ngxs-store/cart.action';
import { CartModel, CartState } from 'src/app/ngxs-store/cart.state';
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
    this.ps.getProducts().subscribe(products => this.productList = products as Product[]
      , error => console.error(error));
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
  @Select(CartState) cart$: Observable<CartModel>;
  Received(data) {
    this.store.dispatch(new AddToCart(data));
  }
  ngOnInit(): void {
    this.cart$.subscribe(cartModel => {
      this.cartProducts = cartModel.cart;
    });
  }

  extension: string = ".pdf";

}
