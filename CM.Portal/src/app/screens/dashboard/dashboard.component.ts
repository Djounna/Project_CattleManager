import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { GestationDto, JobDto, UserDto, GroupDto, PenDto, JobDetailsDto } from '../../api/models';
import { WorkState } from '../../state/work/work.store';
import { CattleState } from '../../state/cattle/cattle.store';
import { Jobs, Workers } from '../../state/work/work.actions';
import { Cows, Gestations, Groups } from '../../state/cattle/cattle.actions';
import { InfrastructureState } from '../../state/infrastructure/infrastructure.store';
import { Pens } from '../../state/infrastructure/infrastructure.action';
import { MapInfo, MapService } from '../../services/map.service';
import * as L from 'leaflet';
import moment from 'moment';
import { JobDetailsListComponent } from '../../features/work/job-details-list/job-details-list.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent extends BaseComponent {

  @ViewChild('jobList') jobList!: JobDetailsListComponent

  // @Select(CattleState.cowIdentifierDict) CowIdentifierDictionnary$!: Observable<Map<number,string>>
  // public CowIdentifierDictionnary: Map<number, string> = new Map<number, string>;
  // @Select(CattleState.cowNameDict) CowNameDictionnary$!: Observable<Map<number,string>>
  // public CowNameDictionnary: Map<number, string> = new Map<number, string>;
  @Select(WorkState.jobsDetails) JobsDetails$!: Observable<JobDetailsDto[]>
  @Select(WorkState.currentUserJobsDetails) CurrentUserJobsDetails$!: Observable<JobDetailsDto[]>
  public JobsDetails: JobDetailsDto[] = []
  @Select(WorkState.workers) Workers$!: Observable<UserDto[]>
  public Workers: UserDto[] = []
  @Select(CattleState.groups) Groups$!: Observable<GroupDto[]>
  public Groups: GroupDto[] = []
  // @Select(CattleState.groupDict) GroupDictionnary$!: Observable<Map<number, string>>
  // public GroupDictionnary: Map<number, string> = new Map<number, string>;
  @Select(InfrastructureState.pens) Pens$!: Observable<PenDto[]>
  public Pens: PenDto[] = []
  @Select(InfrastructureState.penDict) PenDictionnary$!: Observable<Map<number, string>>
  public PenDictionnary: Map<number, string> = new Map<number, string>;
  // private Data$ = combineLatest([
  //   this.CowIdentifierDictionnary$, 
  //   this.CowNameDictionnary$,
  //   this.Workers$, 
  //   this.Groups$, 
  //   this.GroupDictionnary$, 
  //   ])

  public Map!: L.Map;
  public MapInfos!: MapInfo;

  Date!: Date;
  SelectedDate!: string;

  constructor(private mapService: MapService){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getData();
  }

  // ngAfterViewInit() {
  //   this.loadInitialPolygons();
  // }

  private getData(): void{
    // this.Data$.pipe(
    //   takeUntil(this.$OnDestroyed),
    //   tap(([cid, cnd, w, g, gd]) => {
        // this.CowIdentifierDictionnary = cid;
        // this.CowNameDictionnary = cnd;
        // this.Workers = w;
        // this.Groups = g;
        // this.GroupDictionnary = gd;
      // })).subscribe();

      this.Workers$
      .pipe(
        takeUntil(this.$OnDestroyed),
        tap((w) => this.Workers = w))
      .subscribe();

      this.JobsDetails$
      .pipe(
        takeUntil(this.$OnDestroyed),
        tap((j) => this.JobsDetails = j))
      .subscribe();

      this.CurrentUserJobsDetails$
      .pipe(
        takeUntil(this.$OnDestroyed),
        tap((j) => this.JobsDetails = j))
      .subscribe();

      this.Pens$
      .pipe(
        takeUntil(this.$OnDestroyed),
        )
      .subscribe({
        next:(res) => {
          this.Pens = res;
          this.initMap();
          },
        error: (err) => console.log("An error occured during data retrieval")
      });

      this.PenDictionnary$
      .pipe(
        takeUntil(this.$OnDestroyed),
        tap((p) => this.PenDictionnary = p))
      .subscribe();

    // this.store.dispatch(new Cows.GetAll());
    // this.store.dispatch(new Gestations.GetAll());
    // this.store.dispatch(new Groups.GetAll());
    // this.store.dispatch(new Pens.GetAll());
    // this.store.dispatch(new Workers.GetAll());
    this.SetDateAsToday();
  }

  private initMap(): void{
    this.MapInfos = this.mapService.CreateAllPenMapInfos(this.Pens);
    // this.mapService.CreatePenMapLayers(this.MapInfos.MapOptions.penMapLayers, this.Pens);
  }

  public onMapReady(map: any){
    setTimeout(() => {
      this.Map = map;
      this.Map.invalidateSize();
    }, 1000);
  }

  public onFocusPolygon(job: JobDetailsDto){
    let penFocus: PenDto | undefined;
    if (!!job.pen){
      penFocus= this.Pens.find(p => p.id === job.pen?.id) as PenDto;
    }
    else if(!!job.cow){
      if(!!job.cow?.penId){
        penFocus = this.Pens.find(p => p.id === job.cow?.penId) as PenDto;
      }
    }

    if(!!penFocus){
      this.MapInfos.PenMapLayers.clearLayers(); // Remove existing polygons
      this.mapService.CreatePenMapLayersWithFocus(this.MapInfos.PenMapLayers, this.Pens, penFocus)
      const tempPolyForFocus = this.mapService.GeneratePenPolygon(penFocus);
      this.Map.fitBounds(tempPolyForFocus.getBounds());
    }
  }

  public SelectDate(): void{
    let ddate : string = moment(this.Date).format('YYYY-MM-DD');
    this.SelectedDate = ddate;
    this.getJobDetails();
  }

  private getJobDetails(){
    if(this.IsAdmin){
      // this.store.dispatch(new Jobs.GetAllByDate(this.SelectedDate));
      this.store.dispatch(new Jobs.GetAllDetailsByDate(this.SelectedDate));
    }
    else{
      // this.store.dispatch(new Jobs.GetAllByDate(this.SelectedDate));
      this.store.dispatch(new Jobs.GetAllDetailsByUserByDate(this.IdAuth, this.SelectedDate));
    }
  }

  public SelectAll(): void{

  }

  public SelectAllByStatus(status: string): void{
    
  }

  public SetDateAsToday(): void{
    this.Date = new Date();
    this.SelectDate();
  }
}

export interface MilkingHistoryData {
  date: Date,
  Volume: number,
}