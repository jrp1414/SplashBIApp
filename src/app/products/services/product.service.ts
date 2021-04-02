import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import * as productsJson from "./products.json";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private prods: Product[] = (productsJson as any).default
  constructor(private logger: LoggerService, private http: HttpClient) { }
  // baseUrl: string = "http://localhost:64403";

  notify: EventEmitter<boolean> = new EventEmitter();
  getProducts() {
    // return this.http.get(this.baseUrl + "GetProducts");
    return this.http.get(`${environment.apiUrl}/GetProducts`);
  }

  getProduct(id: number) {
    return this.http.get(`${environment.apiUrl}/GetProduct?productId=${id}`);
  }

  getCategories() {
    return this.http.get(`${environment.apiUrl}/GetTypes`);
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
    // return this.http.post(this.baseUrl + "AddProduct", product);
    return this.http.post(`${environment.apiUrl}/AddProduct`, product);
  }

  updateProduct(product: Product) {
    return this.http.post(`${environment.apiUrl}/UpdateProduct`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}/DeleteProduct?productId=${id}`);
  }
}
