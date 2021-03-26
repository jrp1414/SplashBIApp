import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { ProductService } from "./product.service";


@Injectable({
    providedIn: "root"
})
export class ProductsResolver implements Resolve<Product[]>{
    constructor(private ps: ProductService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.ps.getProducts();
    }

}