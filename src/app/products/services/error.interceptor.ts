import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toast: MessageService, private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => { }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 404) {
                        this.toast.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Unable to find requested resource",
                            sticky: false
                        });
                        this.router.navigate(["/home"]);
                    }
                    if (error.status == 401) {
                        this.toast.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Unauthorized User",
                            sticky: false
                        });
                    }
                    if (error.status == 500) {
                        this.toast.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Internal Server Error",
                            sticky: false
                        });
                    }
                }
            }),
        );
    }

}