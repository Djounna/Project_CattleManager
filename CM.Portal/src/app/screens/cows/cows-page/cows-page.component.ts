import { Component, ViewChild } from '@angular/core';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { Observable, combineLatest, finalize, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { CreateCowDialogComponent } from '../../../features/cattle/cow/create-cow-dialog/create-cow-dialog.component';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { CowsListViewComponent } from '../../../features/cattle/cows-list-view/cows-list-view.component';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';

@Component({
  selector: 'app-cows-page',
  templateUrl: './cows-page.component.html',
  styleUrl: './cows-page.component.scss'
})
export class CowsPageComponent extends BaseComponent{

  @ViewChild('cowList') cowList!: CowsListViewComponent

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  @Select(CattleState.groups) Groups$! : Observable<GroupDto[]>
  public Groups: GroupDto[] = [];
  @Select(InfrastructureState.pens) Pens$! : Observable<PenDto[]>
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

  public ShowAll(): void{
    this.cowList.showAll()
  }
  public SelectGroup(group:GroupDto): void{
    this.cowList.filterByGroup(group);
  }
  public SelectPen(pen:PenDto): void{
    this.cowList.filterByPen(pen);
  }
}
