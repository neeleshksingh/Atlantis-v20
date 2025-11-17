import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProgressBarService {
    private isLoadingSubject = new BehaviorSubject<boolean>(false);
    public isLoading$ = this.isLoadingSubject.asObservable();
    private requestCount = 0;

    show() {
        this.isLoadingSubject.next(true);
    }

    hide() {
        this.isLoadingSubject.next(false);
    }

    requestStarted() {
        this.requestCount++;
        this.show();
    }

    requestEnded() {
        this.requestCount--;
        if (this.requestCount <= 0) {
            this.requestCount = 0;
            this.hide();
        }
    }

    resetProgressBar() {
        this.requestCount = 0;
        this.hide();
    }
}