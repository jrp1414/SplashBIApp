import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: "root"
})
export class ProductGuard implements CanActivate {
    constructor(private ps:ProductService,private router:Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.ps.getProduct(route.params.id)){
            return true;
        }
        // this.router.navigate(["/productsmanager/invalid"]);
        this.router.navigate(["productsmanager/invalid"]);
    }

}