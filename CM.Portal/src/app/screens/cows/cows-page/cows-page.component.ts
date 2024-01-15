import { Component, OnDestroy, OnInit } from '@angular/core';
import { CowDto, GroupDto } from '../../../api/models';
import { Observable, takeUntil } from 'rxjs';
import { Select } from '@ngxs/store';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';

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

  override ngOnInit(): void {

    this.displayLoader = true;

    this.Cows$.pipe(takeUntil(this.$Destroyed)).subscribe({
      next:(cows) => {
        this.Cows = cows;
        this.displayLoader = false;
      }
    });

    this.Groups$.subscribe({
      next:(groups) => {
        this.Groups = groups;
      }
    });

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
  }
}
