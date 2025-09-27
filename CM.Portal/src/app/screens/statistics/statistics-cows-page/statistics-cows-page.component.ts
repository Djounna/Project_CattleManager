import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { CattleStatisticsDto, MilkingVolumeDto } from '../../../api/models';
import { CattleStatistics } from '../../../state/cattle/cattle.actions';
import { combineLatest, Observable, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { MilkingState } from '../../../state/milking/milking.store';
import { Milkings } from '../../../state/milking/milking.actions';
import moment from 'moment';

@Component({
  selector: 'app-statistics-cows-page',
  standalone: false,
  templateUrl: './statistics-cows-page.component.html',
  styleUrl: './statistics-cows-page.component.scss'
})
export class StatisticsCowsPageComponent extends BaseComponent{

  @Select(CattleState.cattleStats) CattleStatistics$! : Observable<CattleStatisticsDto>;
  public CattleStatistics! : CattleStatisticsDto;
  @Select(MilkingState.milkingVolumesLastMonth) MilkingVolumesLastMonth$!: Observable<MilkingVolumeDto[]>
  public MilkingVolumes: MilkingVolumeDto[] = []
  private Data$ = combineLatest([this.CattleStatistics$, this.MilkingVolumesLastMonth$])

  @Select(MilkingState.milkingVolumesRange) MilkingVolumesRange$!: Observable<MilkingVolumeDto[]>

  StartDate!: Date;
  SelectedStartDate!: string;
  EndDate!: Date;
  SelectedEndDate!: string;

  override ngOnInit(): void {
    super.ngOnInit();
    this.getData();
  }

  private getData(){
    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([cs, mv]) => {
          this.CattleStatistics = cs,
          this.MilkingVolumes = mv
        }),
      ).subscribe();

    this.MilkingVolumesRange$.pipe(
      takeUntil(this.$OnDestroyed),
      tap((mv) => {
          this.MilkingVolumes = mv
        }),
      ).subscribe();

    this.store.dispatch(new CattleStatistics.Get())
    this.store.dispatch(new Milkings.GetAllLastMonth());
    this.store.dispatch(new Milkings.GetVolumesLastMonth());
  }


  public SelectDate(): void{
    let startdate : string = moment(this.StartDate).format('YYYY-MM-DD');
    let enddate : string = moment(this.EndDate).format('YYYY-MM-DD');
    this.SelectedStartDate = startdate;
    this.SelectedEndDate = enddate;
    this.getMilkingsRange();
  }

  private getMilkingsRange(){
    this.store.dispatch(new Milkings.GetVolumesRange(this.SelectedStartDate, this.SelectedEndDate));
  }
}