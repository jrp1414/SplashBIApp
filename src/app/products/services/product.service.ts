import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { Product } from './product.model';
import * as productsJson from "./products.json";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private prods: Product[] = (productsJson as any).default
  constructor(private logger: LoggerService, private http: HttpClient) { }
  baseUrl: string = "http://localhost:64403/";

  notify: EventEmitter<boolean> = new EventEmitter();
  getProducts() {
    return this.http.get(this.baseUrl + "GetProducts");
  }

  getProduct(id: number) {
    return this.http.get(this.baseUrl + "GetProduct?productId=" + id);
  }

  getCategories() {
    return this.http.get(this.baseUrl + "GetTypes");
  }

  addProduct(product) {
    let imgs = [];
    product.imageurls.forEach(element => {
      imgs.push({ imageUrl: element });
    });
    product.ImageUrls = imgs;
    let tgs = [];
    product.Tags.forEach(element => {
      tgs.push({ tag: element });
    });
    product.Tags = tgs;
    product.typeId = product.type;
    return this.http.post(this.baseUrl + "AddProduct", product);
  }

  updateProduct(product:Product) {
    return this.http.put(this.baseUrl + "UpdateProduct", product);
  }

  deleteProduct(id:number) {
    return this.http.delete(this.baseUrl + "DeleteProduct?productId="+id);
  }
}
