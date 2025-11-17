import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProgressBarService } from '../../global/services/common/progress-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressBarService.requestStarted();

    return next.handle(req).pipe(
      finalize(() => this.progressBarService.requestEnded())
    );
  }
}