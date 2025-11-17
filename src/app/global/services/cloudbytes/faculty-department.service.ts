import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';
import { FacultyDepartment } from 'src/app/shared/models/cloudbytes/faculty-department';

@Injectable({
    providedIn: 'root'
})
export class FacultyDepartmentService extends GenericGlobalService<FacultyDepartment, FacultyDepartment> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "FacultyDepartment", environment.apiGlobalUrl);
    }
}