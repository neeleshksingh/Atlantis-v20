import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'src/app/shared/models/cloudbytes/subject';
import { MessageService } from 'primeng/api';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends GenericGlobalService<Subject, Subject> {

  constructor(http: HttpClient, messageService: MessageService) {
      super(http, messageService, "Subject", environment.apiGlobalUrl);
  }
}