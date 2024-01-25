import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "primeng/dynamicdialog";
import { Store } from "@ngxs/store";
import { MessageService } from "primeng/api";
import { Subject } from "rxjs";

@Component({
    selector: 'app-base',
    template: `<div> base works!!  </div>`,
    providers: [MessageService, DialogService]
})
export class BaseComponent implements OnInit, OnDestroy {

    constructor(
        protected store: Store, 
        protected dialog: MatDialog,
        protected dialogService: DialogService,
        protected messageService: MessageService 
        ){}

    protected $Destroyed : Subject<void> = new Subject<void>();
    protected displayLoader : boolean = false;

    ngOnInit(): void{}

    ngOnDestroy(): void {
        this.$Destroyed.next();
        this.$Destroyed.complete();
    }

    protected toastSuccess(msg:string): void {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: msg }); 
    }

    protected toastError(msg:string): void {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: msg }); 
    }
}