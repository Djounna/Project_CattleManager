import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { CattleStatisticsDto } from '../../../api/models';
import { CattleStatistics } from '../../../state/cattle/cattle.actions';
import { Observable, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-statistics-cows-page',
  standalone: false,
  
  templateUrl: './statistics-cows-page.component.html',
  styleUrl: './statistics-cows-page.component.scss'
})
export class StatisticsCowsPageComponent extends BaseComponent{

  @Select(CattleState.cattleStats) CattleStatistics$! : Observable<CattleStatisticsDto>;
  public CattleStatistics! : CattleStatisticsDto;

  override ngOnInit(): void {
    this.getData();
    this.store.dispatch(new CattleStatistics.Get())
  }

  private getData(){
    this.CattleStatistics$
      .pipe(
        tap((res) =>{
          this.CattleStatistics = res
        } ),
        takeUntil(this.$OnDestroyed)
      ).subscribe();
  }
}