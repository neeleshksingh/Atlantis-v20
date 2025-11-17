import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProgressBarService } from 'src/app/global/services/common/progress-bar.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private progressBarService: ProgressBarService,
        private messageService: MessageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.progressBarService.requestStarted();
        return this.handler(next, request);
    }

    handler(next: any, request: any) {
        return next.handle(request)
            .pipe(
                tap({
                    next: (event) => {
                        if (event instanceof HttpResponse) {
                            this.progressBarService.requestEnded();
                        }
                    }
                }),
                catchError((error: HttpErrorResponse) => {

                    this.progressBarService.resetProgressBar();

                    // Handle CORS errors - specific detection for your case
                    if (error.status === 0 &&
                        (error.statusText === 'Unknown Error' || error.statusText === '' || !error.statusText) &&
                        error.url &&
                        (!error.error || Object.keys(error.error).length === 0)) {
                        const corsErrorMessage = "Cross-origin request blocked. Please ensure you're accessing the application from an authorized domain or contact support or try again later.";

                        const corsError: any = new Error(corsErrorMessage);
                        corsError.error = { message: corsErrorMessage };
                        corsError.status = 0;
                        corsError.statusText = 'CORS Error';

                        return throwError(() => corsError);
                    }

                    // Handle network connectivity issues
                    if (error.status === 0 && !navigator.onLine) {
                        const networkErrorMessage = "No internet connection. Please check your network and try again.";

                        const networkError: any = new Error(networkErrorMessage);
                        networkError.error = { message: networkErrorMessage };
                        networkError.status = 0;
                        networkError.statusText = 'Network Offline';

                        return throwError(() => networkError);
                    }

                    // Handle other network errors (server unreachable)
                    if (error.status === 0) {
                        const connectionErrorMessage = "Unable to connect to server. Please try again later.";

                        const connectionError: any = new Error(connectionErrorMessage);
                        connectionError.error = { message: connectionErrorMessage };
                        connectionError.status = 0;
                        connectionError.statusText = 'Connection Failed';

                        return throwError(() => connectionError);
                    }

                    if (error.status === 401) {
                        if (this.router.routerState.snapshot.url.includes("home/cloudbytes")) {
                            this.router.navigateByUrl('/home/cloudbytes/unauthorized-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/mindspark")) {
                            this.router.navigateByUrl('/home/mindspark/unauthorized-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/knowledgestand")) {
                            this.router.navigateByUrl('/home/knowledgestand/unauthorized-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/finpro")) {
                            this.router.navigateByUrl('/home/finpro/unauthorized-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/bigleads")) {
                            this.router.navigateByUrl('/home/bigleads/unauthorized-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/digitalfingers")) {
                            this.router.navigateByUrl('/home/digitalfingers/unauthorized-access');
                        }
                    }
                    else if (error.status === 403) {
                        if (this.router.routerState.snapshot.url.includes("home/cloudbytes")) {
                            this.router.navigateByUrl('/home/cloudbytes/forbidden-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/mindspark")) {
                            this.router.navigateByUrl('/home/mindspark/forbidden-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/knowledgestand")) {
                            this.router.navigateByUrl('/home/knowledgestand/forbidden-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/finpro")) {
                            this.router.navigateByUrl('/home/finpro/forbidden-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/bigleads")) {
                            this.router.navigateByUrl('/home/bigleads/forbidden-access');
                        } else if (this.router.routerState.snapshot.url.includes("home/digitalfingers")) {
                            this.router.navigateByUrl('/home/digitalfingers/forbidden-access');
                        }
                    }

                    var errorMessage = error.error.message || error.statusText;
                    const customError: any = new Error(errorMessage);
                    customError.error = { message: errorMessage };
                    customError.status = error.status;
                    customError.statusText = error.statusText;

                    // console.log('ErrorInterceptor: -> ' + JSON.stringify(customError));

                    return throwError(() => customError);
                })
            );
    }
}