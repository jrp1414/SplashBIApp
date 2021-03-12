import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/services/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ps: ProductService, private router:Router) { }
  product: Product;
  ngOnInit(): void {
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);

    this.route.params.subscribe((p) => {
      this.product = this.ps.getProduct(p.id);
    });
  }

  Navigate() {
    this.router.navigate(["/productsmanager"]);
  }

}
