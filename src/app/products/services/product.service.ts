import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { Product } from './product.model';
import * as productsJson from "./products.json";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private prods: Product[] = (productsJson as any).default
  constructor(private logger: LoggerService) { }

  notify: EventEmitter<boolean> = new EventEmitter();
  getProducts(): Product[] {
    this.logger.log("Get Products called");
    return this.prods;
  }

  getProduct(id: number): Product {
    return this.prods.find(p => p.id == id);
  }

  getCategories(): string[] {
    return [...new Set(this.prods.map(p=>p.type))];    
  }
}
