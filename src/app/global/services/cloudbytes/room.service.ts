import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { GenericGlobalService } from 'src/app/shared/services/generic-service-global.service';
import { Room } from 'src/app/shared/models/cloudbytes/room';
@Injectable({
    providedIn: 'root'
})
export class RoomService extends GenericGlobalService<Room, Room> {

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService, "Room", environment.apiGlobalUrl);
    }

    getByBuildingId(buildingId: number) {
        return this.http.get<Room[]>(environment.apiGlobalUrl + '/Room/GetByBuildingId/' + buildingId);
    }
}