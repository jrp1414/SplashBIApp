import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  pageIndex: number = 0;
  pageSize: number = 10;
  pageEvent: PageEvent;
  filteredProducts: Product[] = [];
  getFilteredData(e: PageEvent): PageEvent {
    this.filteredProducts = this.productsList.slice(e.pageIndex * e.pageSize, (e.pageIndex * e.pageSize) + e.pageSize);
    return e;
  }

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.productsList = this.ps.getProducts();
    this.filteredProducts = this.productsList.slice(this.pageIndex * this.pageSize, (this.pageIndex * this.pageSize) + this.pageSize);
  }

}
