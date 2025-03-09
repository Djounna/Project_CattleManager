import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { AlertDto, GestationDto, InterventionDto, JobDto, UserDto, GroupDto, PenDto } from '../../api/models';
import { AlertState } from '../../state/alert/alert.store';
import { WorkState } from '../../state/work/work.store';
import { CattleState } from '../../state/cattle/cattle.store';
import { Alerts } from '../../state/alert/alert.action';
import { Jobs, Workers } from '../../state/work/work.actions';
import { Cows, Gestations, Groups } from '../../state/cattle/cattle.actions';
import { InfrastructureState } from '../../state/infrastructure/infrastructure.store';
import { Pens } from '../../state/infrastructure/infrastructure.action';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent extends BaseComponent {

  @Select(CattleState.cowIdentifierDict) CowIdentifierDictionnary$!: Observable<Map<number,string>>
  public CowIdentifierDictionnary: Map<number, string> = new Map<number, string>;
  @Select(CattleState.cowNameDict) CowNameDictionnary$!: Observable<Map<number,string>>
  public CowNameDictionnary: Map<number, string> = new Map<number, string>;
  @Select(WorkState.jobs) Jobs$!: Observable<JobDto[]>
  public Jobs: JobDto[] = []
  @Select(WorkState.jobs) Workers$!: Observable<UserDto[]>
  public Workers: UserDto[] = []
  @Select(AlertState.alerts) Alerts$!: Observable<AlertDto[]>
  public Alerts: AlertDto[] = []
  @Select(CattleState.gestations) Gestations$!: Observable<GestationDto[]>
  public Gestations: GestationDto[] = []
  @Select(CattleState.interventions) Interventions$!: Observable<InterventionDto[]>
  public Interventions: InterventionDto[] = []
  @Select(CattleState.groups) Groups$!: Observable<GroupDto[]>
  public Groups: GroupDto[] = []
  @Select(CattleState.groupDict) GroupDictionnary$!: Observable<Map<number, string>>
  public GroupDictionnary: Map<number, string> = new Map<number, string>;
  @Select(InfrastructureState.pens) Pens$!: Observable<PenDto[]>
  public Pens: PenDto[] = []
  @Select(InfrastructureState.penDict) PenDictionnary$!: Observable<Map<number, string>>
  public PenDictionnary: Map<number, string> = new Map<number, string>;
  private Data$ = combineLatest([this.CowIdentifierDictionnary$, this.CowNameDictionnary$, this.Alerts$, this.Jobs$, this.Workers$, this.Gestations$, this.Groups$, this.GroupDictionnary$, this.Pens$, this.PenDictionnary$])

  override ngOnInit(): void {
    super.ngOnInit();
    this.getData();
  }

  private getData(): void{
    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([cid, cnd, a, j, w, ge, g, gd, p, pd]) => {
        this.CowIdentifierDictionnary = cid;
        this.CowNameDictionnary = cnd;
        this.Alerts = a;
        this.Jobs = j;
        this.Workers = w;
        this.Gestations = ge;
        this.Groups = g;
        this.GroupDictionnary = gd;
        this.Pens = p;
        this.PenDictionnary = pd;
      })).subscribe();

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Alerts.GetAll());
    this.store.dispatch(new Jobs.GetAll());
    this.store.dispatch(new Gestations.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
    this.store.dispatch(new Workers.GetAll());
  }
}

export interface MilkingHistoryData {
  date: Date,
  Volume: number,
}
