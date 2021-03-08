import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.model';
import * as productsJson from "../services/products.json";

@Component({
  selector: 'app-products',
  templateUrl: "./products.component.html",
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList: Product[] = (productsJson as any).default;
  product: Product;
  constructor() {

  }

  filterText: string = "";
  getStyle(product) {
    if (product.rating > 3) {
      return { "background-color": "chartreuse" };
    }
    return { "background-color": "crimson" };
  }

  getClass(product){
    if (product.rating > 3) {
      // return ["green","bold"];
      return {green:true,bold:true};
    }
    return "red bold";
  }

  cartProducts:string[]=[];
  Received(data){
    this.cartProducts.push(data);
  }

  extension:string=".pdf";

}
