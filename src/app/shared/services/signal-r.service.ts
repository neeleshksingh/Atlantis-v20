import { Injectable } from '@angular/core';
import { NotificationMessage } from '../models/commons/notificationMessage';
import * as signalR from '@microsoft/signalr';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

   public data!: NotificationMessage;

  public bradcastedData!: NotificationMessage;
  private hubConnection?: signalR.HubConnection;

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }
    public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.apiSignalRUrl + "/signalr")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferNotificationMessageListener = () => {
    this.hubConnection?.on('TransferNotificationMessageData', (data) => {
      this.data = data;
      console.log(data);
      if (data) {
        if (data.purpose == 'RefreshBrowser') {
          this.confirmationService.confirm({
            message: data.description,
            header: 'Alert: ' + data.purpose,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              window.location.reload();
            },
            reject: () => {
            }
          });
        } else if (data.purpose == 'LogOut') {
          this.confirmationService.confirm({
            message: data.description,
            header: 'Alert: ' + data.purpose,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              localStorage.clear();
              this.router.navigateByUrl("/Login");
            },
            reject: () => {
            }
          });
        } else if (data.purpose == 'ApplicationMaintenance') {
          this.confirmationService.confirm({
            message: data.description,
            header: 'Alert: ' + data.purpose,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
            },
            reject: () => {
            }
          });
        }
      }
    });
  }

  public broadcastNotificationMessage = () => {
    var data = {
      id: 1,
      name: "test",
      title: "test title",
      description: "deme test message"
    }

    this.hubConnection?.invoke('BroadcastNotificationMessageData', data)
      .catch(err => console.error(err));
  }

  public addBroadcastNotificationMessageListener = () => {
    this.hubConnection?.on('BroadcastNotificationMessageData', (data) => {
      this.bradcastedData = data;
    })
  }
}

