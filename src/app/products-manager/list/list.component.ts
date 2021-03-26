import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/products/services/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  productsList: Product[] = [];
  pageIndex: number = 0;
  pageSize: number = 10;
  pageEvent: PageEvent;
  filteredProducts: Product[] = [];
  getFilteredData(e: PageEvent): PageEvent {
    this.filteredProducts = this.productsList.slice(e.pageIndex * e.pageSize, (e.pageIndex * e.pageSize) + e.pageSize);
    return e;
  }

  constructor(private ps: ProductService, private toast: MessageService) { }

  ngOnInit(): void {
    this.RefreshProductList();
    this.ps.notify.subscribe(flag => this.RefreshProductList());
  }

  RefreshProductList() {
    this.ps.getProducts().subscribe((resp) => {
      this.productsList = <Product[]>resp;
      this.filteredProducts = this.productsList.slice(this.pageIndex * this.pageSize, (this.pageIndex * this.pageSize) + this.pageSize);
    });
  }

  DeleteProduct(prod: Product) {
    this.ps.deleteProduct(prod.id).subscribe(resp => {
      this.toast.add({ severity: "info", summary: "Deleted " + prod.title, detail: prod.title + " successfully deleted" });
      this.RefreshProductList();
    });
  }

}
