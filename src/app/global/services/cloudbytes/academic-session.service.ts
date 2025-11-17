import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AcademicSession } from 'src/app/shared/models/cloudbytes/academic-session';
import { MessageService } from 'primeng/api';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
    providedIn: 'root'
})
export class AcademicSessionService extends GenericGlobalService<AcademicSession, AcademicSession> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "AcademicSession", environment.apiGlobalUrl);
    }
}