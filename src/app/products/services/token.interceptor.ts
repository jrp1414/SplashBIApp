import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = localStorage.getItem("access_token");
        //const refresh_token = localStorage.getItem("refresh_token");
        let headers = req.headers.set("authorization", `Bearer ${access_token}`);
        let newReq = req.clone({ headers });
        return next.handle(newReq);
    }
}