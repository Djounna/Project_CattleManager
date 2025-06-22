import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "primeng/dynamicdialog";
import { Select, Store } from "@ngxs/store";
import { MessageService } from "primeng/api";
import { Observable, Subject, tap } from "rxjs";
import { LoaderService } from "../services/loader.service";
import { UserState } from "../state/user/user.store";

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
    protected cdref = inject(ChangeDetectorRef)

    protected $OnDestroyed : Subject<void> = new Subject<void>();
    // @Select(UserState.IsAdmin) IsAdmin$! : Observable<boolean>;
    // @Select(UserState.IsWorker) IsWorker$! : Observable<boolean>;
    public IsAdmin: boolean = false;
    public IsWorker: boolean = false;
    public IdAuth: string = ''

    ngOnInit(): void{
        // this.IsAdmin$.pipe(tap((res) => this.IsAdmin = res)).subscribe();
        // this.IsWorker$.pipe(tap((res) => this.IsWorker = res)).subscribe();
        this.IsAdmin = this.store.selectSnapshot(UserState.IsAdmin);
        this.IsWorker = this.store.selectSnapshot(UserState.IsWorker);
        this.IdAuth = this.store.selectSnapshot(UserState.CurrentUserAuthId);
        console.log('IsAdmin : '); console.log(this.IsAdmin);
        console.log('IsWorker : '); console.log(this.IsWorker);
        console.log('IdAuth : '); console.log(this.IdAuth);
    }

    ngOnDestroy(): void {
        this.$OnDestroyed.next();
        this.$OnDestroyed.complete();
    }

    protected toastSuccess(msg:string): void {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: msg }); 
    }

    protected toastWarning(msg:string): void {
        this.messageService.add({ severity: 'warn', summary: 'Attention', detail: msg }); 
    }

    protected toastError(msg:string): void {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: msg }); 
    }
}