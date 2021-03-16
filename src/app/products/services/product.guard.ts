import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: "root"
})
export class ProductGuard implements CanActivate {
    constructor(private ps: ProductService,
        private router: Router, private messageService: MessageService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.ps.getProduct(route.params.id)) {
            return true;
        }
        this.messageService.add({
            severity: "error",
            summary: "Error Occurred",
            detail:"Invalid product Id",
            sticky:false
        });
        this.router.navigate(["productsmanager/invalid"]);
    }

}