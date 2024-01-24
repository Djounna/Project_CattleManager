import { Component } from '@angular/core';
import { CowDto, GroupDto } from '../../../api/models';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { CreateCowDialogComponent } from '../../../features/cattle/cow/create-cow-dialog/create-cow-dialog.component';

@Component({
  selector: 'app-cows-page',
  templateUrl: './cows-page.component.html',
  styleUrl: './cows-page.component.css'
})
export class CowsPageComponent extends BaseComponent{

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
  
  createCowDialog(): void {
    const dialogRef = this.dialog.open(CreateCowDialogComponent, {
      height: '400px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if(result == null)
        return;
      this.store.dispatch(new Cows.Create({body:result})).subscribe({
        next:() => this.toastSuccess("l'animal a été créé avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
