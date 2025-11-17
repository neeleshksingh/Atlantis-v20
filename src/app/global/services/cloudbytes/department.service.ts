import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { Department } from 'src/app/shared/models/cloudbytes/department';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService extends GenericGlobalService<Department, Department> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "Department", environment.apiGlobalUrl);
    }
}