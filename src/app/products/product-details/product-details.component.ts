import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: ProductService) { }
  product: Product;
  ngOnInit(): void {
    // console.log(this.route.snapshot.params);
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);

    this.route.params.subscribe((p) => {
      // console.log(p);
      // this.product = this.ps.getProduct(p.id);
    });

    this.route.queryParams.subscribe((q) => { console.log(q); });
    
  }

}
