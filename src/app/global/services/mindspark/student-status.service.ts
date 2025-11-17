import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { StudentStatus } from 'src/app/shared/models/mindspark/student-status';
@Injectable({
  providedIn: 'root'
})
export class StudentStatusService {

  constructor(private http: HttpClient) { }
  
  
  private studentStatusSubject = new BehaviorSubject<StudentStatus[]>([]);

  getStudentStatusByStudentId(studentId: string) {
     return this.http.get<StudentStatus[]>(environment.apiGlobalUrl + '/StudentStatus/GetByStudentId/' + studentId)
  }
  get studentStatus(){
    return this.studentStatusSubject.asObservable();
  }

  getStudentStatus() {
    return this.http.get<StudentStatus>(environment.apiGlobalUrl + '/StudentStatus/GetAll');
  }

  saveStudentStatus(studentStatus: StudentStatus) {
    return this.http.post<StudentStatus>(environment.apiGlobalUrl + '/StudentStatus/Add', studentStatus);
  }

  updateStudentStatus(studentStatus: StudentStatus) {
    return this.http.put<StudentStatus>(environment.apiGlobalUrl + '/StudentStatus/UpdateById', studentStatus);
  }

  getByQueryParameters(searchText: string, pageIndex: string, sortBy: string, sortDirection: string, pageSize: string) {
    return this.http.get<any>(environment.apiGlobalUrl + '/StudentStatus/GetByQueryParameters?SearchText=' + searchText + '&PageIndex=' + pageIndex + '&SortBy=' + sortBy + '&SortDirection=' + sortDirection + '&PageSize=' + pageSize);
  }

  deleteByQueryParameters(studentStatusID: number) {
    return this.http.post<StudentStatus>(environment.apiGlobalUrl + `/StudentStatus/DeleteByIntId/${studentStatusID}` ,null );
  }

  getByStudentId(studentStatusID: string) {
    return this.http.get<StudentStatus[]>(environment.apiGlobalUrl + '/StudentStatus/GetByStudentId/' + studentStatusID);
  }

    getStudentStatusByAcademicSessionProgramOperationalVertical(academicSessionId: number,programId: number,operationalVerticalId: number) {
    return this.http.get<StudentStatus[]>(environment.apiGlobalUrl + '/StudentStatus/GetByAcademicSession/' + academicSessionId + '/Program/' + programId + '/OperationalVertical/' + operationalVerticalId);
  }
}