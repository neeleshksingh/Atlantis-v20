import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abc } from 'src/app/shared/models/finance-Pro/abc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbcService {

  constructor(private http: HttpClient) { }
  getAbcId(abcId : string, studentId: string) {
    return this.http.get<Abc>(environment.apiExaminationsUrl + '/ABC/GetByABCID/'+ abcId+'/studentId/'+studentId);
  }
}
