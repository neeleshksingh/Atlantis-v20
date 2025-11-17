import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConcessionCategory } from 'src/app/shared/models/cloudbytes/concession-category';
import { MessageService } from 'primeng/api';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';

@Injectable({
    providedIn: 'root'
})
export class ConcessionCategoryService extends GenericGlobalService<ConcessionCategory, ConcessionCategory> {

  constructor(http: HttpClient, messageService: MessageService) {
      super(http, messageService, "ConcessionCategory", environment.apiGlobalUrl);
  }
}