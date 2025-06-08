import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { CreateGroupDialogComponent } from '../../../features/groups/group/create-group-dialog/create-group-dialog.component';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { PicklistGroupDialogComponent } from '../../../features/shared/dialogs/picklist-group-dialog/picklist-group-dialog.component';
import { UpdateGroupDialogComponent } from '../../../features/groups/group/update-group-dialog/update-group-dialog.component';

@Component({
    selector: 'app-group-page',
    templateUrl: './group-page.component.html',
    styleUrl: './group-page.component.scss',
    standalone: false
})
export class GroupPageComponent extends BaseComponent {

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  @Select(CattleState.groups) Groups$! : Observable<GroupDto[]>
  public Groups: GroupDto[] = [];
  @Select(CattleState.groups) Pens$! : Observable<PenDto[]>
  public Pens: PenDto[] = [];

  public Data$ = combineLatest([this.Cows$, this.Groups$, this.Pens$])

  override ngOnInit(): void {
    super.ngOnInit();

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c,g,p]) =>{
        this.Cows = c;
        this.Groups = g;
        this.Pens = p;
        })).subscribe();

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
  }

  public picklistGroupDialog(group: any): void{
    const dialogRef = this.dialog.open(PicklistGroupDialogComponent, {
      height: '80vh',
      width: '80vw',
      data: {Cows: this.Cows, Groups: this.Groups, SourceId: group.id} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true)
        this.store.dispatch(new Groups.GetAll())
    });
  }

  public CreateGroupDialog(): void {
    const dialogRef = this.dialogService.open(CreateGroupDialogComponent, {
      header: 'Créer un groupe',
      height: '400px',
      width: '350px',
    });

    // dialogRef.onClose().subscribe(result => {
    //   if(result == null)
    //     return;
    //   this.store.dispatch(new Groups.Create({body:result})).subscribe({
    //     next:() => this.toastSuccess("Le groupe a été ajoutée avec succès"),
    //     error:() => this.toastError("Une erreur s'est produite")
    //   });
    // });
  }

  public UpdateGroupDialog(group: GroupDto): void{
    const dialogref = this.dialogService.open(UpdateGroupDialogComponent, {
      header: 'Mettre à jour un groupe',
      height: '400px',
      width: '350px',
      data: group
    })
  }
}
