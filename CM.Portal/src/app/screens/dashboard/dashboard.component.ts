import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, map, takeUntil, tap } from 'rxjs';
import { AlertDto, GestationDto, JobDto, MilkingDto, UserDto } from '../../api/models';
import { AlertState } from '../../state/alert/alert.store';
import { WorkState } from '../../state/work/work.store';
import { CattleState } from '../../state/cattle/cattle.store';
import { Alerts } from '../../state/alert/alert.action';
import { Jobs, Workers } from '../../state/work/work.actions';
import { Gestations } from '../../state/cattle/cattle.actions';
import { MilkingState } from '../../state/milking/milking.store';
import { Milkings } from '../../state/milking/milking.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent{

  @Select(WorkState.jobs) Jobs$! : Observable<JobDto[]>
  public Jobs : JobDto[] = []
  @Select(WorkState.jobs) Workers$! : Observable<UserDto[]>
  public Workers : UserDto[] = []
  @Select(AlertState.alerts) Alerts$! : Observable<AlertDto[]>
  public Alerts : AlertDto[] = []
  @Select(CattleState.gestations) Gestations$! : Observable<GestationDto[]>
  public Gestations : GestationDto[] = []
  @Select(MilkingState.milkingsLastMonth) Milkings$! : Observable<MilkingDto[]>
  public Milkings : MilkingDto[] = []

  public Data$ = combineLatest([this.Alerts$, this.Jobs$, this.Workers$, this.Gestations$, this.Milkings$])

  override ngOnInit(): void {

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([a,j,w,g,m]) =>{
        this.Alerts = a;
        this.Jobs = j;
        this.Workers = w;
        this.Gestations = g;
        this.Milkings = m;
      })).subscribe();

    // this.Milkings$.pipe(
    //   tap((m) => {
    //     m.map(m => )
    //   } )
    // ).subscribe();
    
    this.store.dispatch(new Alerts.GetAll());
    this.store.dispatch(new Jobs.GetAll());
    this.store.dispatch(new Gestations.GetAll());
    this.store.dispatch(new Workers.GetAll());
    this.store.dispatch(new Milkings.GetAllLastMonth());
  }
}

export interface MilkingHistoryData{
  date : Date,
  Volume: number,
}
