import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/services/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  productsList: Product[];
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.productsList = this.ps.getProducts();
  }

}
