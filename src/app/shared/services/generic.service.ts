import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { PagedData } from "../models/commons/paged-data";
import { DateRange } from "../models/commons/date-range";
import { MessageService } from "primeng/api";

export abstract class GenericService<TRequest, TResponse> {

    genericObjectName: string;
    apiBaseUrl: string;

    constructor(public http: HttpClient,
        public messageService: MessageService,
        genericObjectName: string,
        apiBaseUrl: string,) {
        this.genericObjectName = genericObjectName;
        this.apiBaseUrl = apiBaseUrl;
    }

    createInstance<T>(type: new () => T): T {
        return new type();
    }

    getAll(): Observable<TResponse[]> {
    return this.http.get<TResponse[]>(`${this.apiBaseUrl}/${this.genericObjectName}/GetAll`)
        .pipe(
            catchError(error => this.handleError<TResponse[]>(error))
        );
    }

    getById(id: number): Observable<TResponse> {
        return this.http.get<TResponse>(`${this.apiBaseUrl}/${this.genericObjectName}/GetByIntId/${id}`)
            .pipe(
                catchError(error => this.handleError<TResponse>(error))
            );
    }

    getByTerms(terms: string): Observable<TResponse[]> {
        return this.http.get<TResponse[]>(this.apiBaseUrl + '/' + this.genericObjectName + '/GetByTerms/' + terms);
    }

    getByQueryParameters(searchText: any, pageIndex: any, sortBy: any, sortDirection: any, pageSize: any) {
        return this.http.get<PagedData<TResponse>>(this.apiBaseUrl + '/' + this.genericObjectName + '/GetByQueryParameters?searchText=' + searchText + '&PageIndex=' + pageIndex + '&SortBy=' + sortBy + '&SortDirection=' + sortDirection + '&PageSize=' + pageSize);
    }

    getByDateRangeRequest(dateRange: DateRange): Observable<TResponse> {
        return this.http.post<TResponse>(this.apiBaseUrl + '/' + this.genericObjectName + '/GetByDateRangeRequest', dateRange);
    }

    add<TRequest, TResponse extends { id: any }>(request: TRequest): Observable<TResponse> {
        console.log(request)
    return this.http.post<TResponse>(`${this.apiBaseUrl}/${this.genericObjectName}/Add`, request)
        .pipe(
            catchError(error => this.handleError<TResponse>(error))
        );
    }


    addMultiple(requests: TRequest[]): Observable<TResponse[]> {
        return this.http.post<TResponse[]>(this.apiBaseUrl + '/' + this.genericObjectName + '/AddMultiple', requests);
    }

    updateById(request: TRequest): Observable<TResponse> {
    return this.http.put<TResponse>(`${this.apiBaseUrl}/${this.genericObjectName}/UpdateById`, request)
        .pipe(
            catchError(error => this.handleError<TResponse>(error))
        );
    }

    deleteById(id: number): Observable<TResponse> {
        return this.http.post<TResponse>(`${this.apiBaseUrl}/${this.genericObjectName}/DeleteByIntId/${id}`, null)
            .pipe(
                catchError(error => this.handleError<TResponse>(error))
            );
    }

    protected handleError<T>(error: any): Observable<T> {
        let errorMessage = 'An unexpected error occurred.';
    
        if (error.status === 400) {
            errorMessage = error.error?.message || 'Bad request. Please check your input.';
        }
    
        this.messageService.add({
            severity: 'error',
            summary: `Error ${error.status}`,
            detail: errorMessage,
            life: 3000
        });
    
        return throwError(() => error);
    }
}