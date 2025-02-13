import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { combineLatest, Observable, takeUntil, tap } from 'rxjs';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { Pens } from '../../../state/infrastructure/infrastructure.action';

@Component({
  selector: 'app-pen-page',
  standalone: false,
  
  templateUrl: './pen-page.component.html',
  styleUrl: './pen-page.component.scss'
})
export class PenPageComponent extends BaseComponent{

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  @Select(CattleState.groups) Groups$! : Observable<GroupDto[]>
  public Groups: GroupDto[] = [];
  @Select(CattleState.groups) Pens$! : Observable<PenDto[]>
  public Pens: PenDto[] = [];

  public Data$ = combineLatest([this.Cows$, this.Groups$, this.Pens$])

  override ngOnInit(): void {

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
}
