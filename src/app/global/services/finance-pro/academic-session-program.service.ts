import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GenericService } from 'src/app/shared/services/generic.service';
import { AcademicSessionProgram } from 'src/app/shared/models/cloudbytes/academic-session-program';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AcademicSessionProgramService extends GenericService<AcademicSessionProgram, AcademicSessionProgram> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "AcademicSessionProgram", environment.apiGlobalUrl);
    }

    getAcademicSessionProgramListByAcademicSessionId(academicSessionId: number) {
        return this.http.get<AcademicSessionProgram[]>(environment.apiGlobalUrl + '/AcademicSessionProgram/GetAcademicSessionProgramByAcademicSessionId/' + academicSessionId);
    }

    getAcademicSessionProgramListByAcademicSessionIdProgramId(academicSessionId: number, programId: number) {
        return this.http.get<AcademicSessionProgram[]>(environment.apiGlobalUrl + '/AcademicSessionProgram/GetByAcademicSession/' + academicSessionId + '/Program/' + programId);
    }

    getAcademicSessionProgramListByAcademicSessionIdProgramIdOperationalVerticalId(academicSessionId: number, programId: number, operationalVerticalId: number) {
        return this.http.get<AcademicSessionProgram[]>(environment.apiGlobalUrl + '/AcademicSessionProgram/GetByAcademicSession/' + academicSessionId + '/Program/' + programId + '/OperationalVertical/' + operationalVerticalId);
    }
}