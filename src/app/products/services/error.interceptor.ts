import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toast: MessageService, private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage: string = `Error Code: ${error.status}\nMessage: ${error.message}`;
                  
                return throwError(errorMessage);
            })
        );
    }

}