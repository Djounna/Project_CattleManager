import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CowDto, GroupDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';

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
}
