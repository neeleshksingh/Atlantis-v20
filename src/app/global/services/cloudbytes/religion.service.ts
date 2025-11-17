import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { Religion } from 'src/app/shared/models/cloudbytes/religion';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
    providedIn: 'root'
})
export class ReligionService extends GenericGlobalService<Religion, Religion> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "Religion", environment.apiGlobalUrl);
    }
}