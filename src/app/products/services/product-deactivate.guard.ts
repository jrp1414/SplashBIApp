import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AddComponent } from "src/app/products-manager/add/add.component";

@Injectable({ providedIn: "root" })
export class ProductDeactivateGuard implements CanDeactivate<AddComponent>{
    canDeactivate(component: AddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (component.productForm.dirty || component.productForm.status!=="VALID") {
            if (confirm("Are you sure to navigate away and loose all your changes?")) {
                return true;
            }
            return false;
        }
        return true;
    }
}