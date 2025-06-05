import { Injectable } from "@angular/core";
import * as signalR from '@microsoft/signalr';
import { AlertDto } from "../api/models";
import { Store } from "@ngxs/store";
import { Alerts } from "../state/alert/alert.action";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class SignalRService{
    private hubConnection!: signalR.HubConnection;

    constructor(
        private store: Store,
        private messageService : MessageService
    ) {}

    public startConnection(){
        this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:7276/CMhub')
        .withAutomaticReconnect()
        .build();

        this.hubConnection
        .start()
        .then(() => console.log('SignalR Connection started'))
        .catch(err => console.log('Error establishing SignalR connection: ' + err));
    }

    public addMessageListener = () => {
        this.hubConnection.on('NewAlert', (newAlert: AlertDto) => {
            this.messageService.add({ severity: 'success', summary: 'Important', detail: 'Une nouvelle alerte est arrivée'}); 
            this.store.dispatch(new Alerts.ReceiveNew(newAlert));
        });
    }
}