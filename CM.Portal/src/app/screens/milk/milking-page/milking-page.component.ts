import { Component } from '@angular/core';
import { CowDto } from '../../../api/models';
import { Select } from '@ngxs/store';
import { Observable, takeUntil, tap } from 'rxjs';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { Pens } from '../../../state/infrastructure/infrastructure.action';

@Component({
  selector: 'app-milking-page',
  templateUrl: './milking-page.component.html',
  styleUrl: './milking-page.component.scss'
})
export class MilkingPageComponent extends BaseComponent {
  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  override ngOnInit(): void {

    this.displayLoader = true;

    this.Cows$.pipe(
      takeUntil(this.$OnDestroyed),
      tap((c) =>{
        this.Cows = c.filter(c => c.groupId == 2);
        })).subscribe({
          next:(res) => this.displayLoader = false,
          error:(err) => this.displayLoader = false
        });

    this.store.dispatch(new Cows.GetAll());
  }
}
