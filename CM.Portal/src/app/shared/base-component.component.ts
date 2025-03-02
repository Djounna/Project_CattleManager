import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "primeng/dynamicdialog";
import { Store } from "@ngxs/store";
import { MessageService } from "primeng/api";
import { Subject } from "rxjs";
import { LoaderService } from "../services/loader.service";

@Component({
    selector: 'app-base',
    template: `<div> base works!!  </div>`,
    providers: [MessageService, DialogService],
    standalone: false
})
export class BaseComponent implements OnInit, OnDestroy {

    protected store = inject(Store);
    protected dialog = inject(MatDialog);
    protected dialogService =  inject(DialogService);
    protected messageService = inject(MessageService);
    protected loader = inject(LoaderService);

    protected $OnDestroyed : Subject<void> = new Subject<void>();

    ngOnInit(): void{}

    ngOnDestroy(): void {
        this.$OnDestroyed.next();
        this.$OnDestroyed.complete();
    }

    protected toastSuccess(msg:string): void {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: msg }); 
    }

    protected toastError(msg:string): void {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: msg }); 
    }
}