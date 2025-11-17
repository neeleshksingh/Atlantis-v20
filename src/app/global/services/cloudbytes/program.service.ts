import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { AcademicSessionProgramExpandos, Program } from 'src/app/shared/models/cloudbytes/program';
import { AcademicSessionProgram } from 'src/app/shared/models/cloudbytes/academic-session-program';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
    providedIn: 'root'
})
export class ProgramService extends GenericGlobalService<Program, Program> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "Program", environment.apiGlobalUrl);
    }

    getProgramsByAcademicSessionId(academicSessionId: number) {
        return this.http.get<Program[]>(environment.apiGlobalUrl + '/Program/GetByAcademicSessionId/' + academicSessionId);
    }

    getByAcademicSessionIds(academicSessionIds: number[]): Observable<AcademicSessionProgramExpandos> {
        return this.http.post<AcademicSessionProgramExpandos>(`${environment.apiGlobalUrl}/Program/GetByAcademicSessionIds`,academicSessionIds);
    }
}