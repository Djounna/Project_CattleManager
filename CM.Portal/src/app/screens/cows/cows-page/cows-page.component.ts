import { Component } from '@angular/core';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { CreateCowDialogComponent } from '../../../features/cattle/cow/create-cow-dialog/create-cow-dialog.component';
import { Pens } from '../../../state/infrastructure/infrastructure.action';

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
  @Select(CattleState.groups) Pens$! : Observable<PenDto[]>
  public Pens: PenDto[] = [];

  public Data$ = combineLatest([this.Cows$, this.Groups$, this.Pens$])

  override ngOnInit(): void {

    this.displayLoader = true;

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c,g,p]) =>{
        this.Cows = c;
        this.Groups = g;
        this.Pens = p;
        })).subscribe({
          next:(res) => this.displayLoader = false,
          error:(err) => this.displayLoader = false
        });

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
  }
  
  createCowDialog(): void {
    const dialogRef = this.dialogService.open(CreateCowDialogComponent, {
      height: '400px',
      width: '700px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result == null)
        return;
      this.store.dispatch(new Cows.Create({body:result})).subscribe({
        next:() => this.toastSuccess("L'animal a été créé avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
