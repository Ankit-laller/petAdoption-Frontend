import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRServiceService {
  private hubConnection!: HubConnection;
  private notificationSubject = new Subject<string>();
   token = localStorage.getItem("token")
constructor() { }
// , {
//   // Set the Bearer token in the Authorization header
//   accessTokenFactory: () => this.token || '', // Pass the token here
// }

  public startConnection(): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7193/notificationHub',{
        skipNegotiation:true,
        transport: signalR.HttpTransportType.WebSockets
      } ) // Your Web API URL
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR connected');
      })
      .catch((err) => {
        console.error('Error while starting connection: ' + err);
      });

    this.hubConnection.on('ReceiveNotification', (message: string) => {
      this.notificationSubject.next(message);
    });
  }

  public getNotification() {
    return this.notificationSubject.asObservable();
  }

  public stopConnection(): void {
    if (this.hubConnection) {
      this.hubConnection.stop();
    }
  }
}
