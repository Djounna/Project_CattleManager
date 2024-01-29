import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CowDto, GroupDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { CreateGroupDialogComponent } from '../../../features/groups/group/create-group-dialog/create-group-dialog.component';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.css'
})
export class GroupPageComponent extends BaseComponent {

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  @Select(CattleState.groups) Groups$! : Observable<GroupDto[]>
  public Groups: GroupDto[] = [];

  public Data$ = combineLatest([this.Cows$, this.Groups$])

  override ngOnInit(): void {

    this.Data$.pipe(
      takeUntil(this.$Destroyed),
      tap(([c,g]) =>{
        this.Cows = c;
        this.Groups = g;
        })).subscribe();

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
  }

  createGroupDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      height: '400px',
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == null)
        return;
      this.store.dispatch(new Groups.Create({body:result})).subscribe({
        next:() => this.toastSuccess("Le groupe a été ajoutée avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
