import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { AlertDto, JobDto } from '../../api/models';
import { AlertState } from '../../state/alert/alert.store';
import { WorkState } from '../../state/work/work.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent extends BaseComponent{

  @Select(WorkState.jobs) Jobs$! : Observable<JobDto[]>
  public Jobs : JobDto[] = []
  @Select(AlertState.alerts) Alerts$! : Observable<AlertDto[]>
  public Alerts : AlertDto[] = []

  public Data$ = combineLatest([this.Jobs$, this.Alerts$])

  override ngOnInit(): void {
    // this.Alerts$.subscribe({
    //   next:(alerts) => this.Alerts = alerts;
    // })
    this.Data$.pipe(takeUntil(this.$Destroyed),tap(([j,a]) =>{
      this.Jobs = j;
      this.Alerts = a
    })).subscribe()
  }
}
