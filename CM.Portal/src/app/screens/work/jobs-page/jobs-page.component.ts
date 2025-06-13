import { Component, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CowDto, JobDetailsDto, JobDto, PenDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { Jobs, Workers } from '../../../state/work/work.actions';
import { WorkState } from '../../../state/work/work.store';
import { CreateJobDialogComponent } from '../../../features/work/job/create-job-dialog/create-job-dialog.component';
import { JobDetailsListComponent } from '../../../features/work/job-details-list/job-details-list.component';
import moment from 'moment';

@Component({
    selector: 'app-jobs-page',
    templateUrl: './jobs-page.component.html',
    styleUrl: './jobs-page.component.scss',
    standalone: false
})
export class JobsPageComponent extends BaseComponent {

  @ViewChild('jobList') jobList!: JobDetailsListComponent

  @Select(WorkState.jobs) Jobs$! : Observable<JobDto[]>
  public Jobs : JobDto[] = [];
  @Select(WorkState.jobsDetails) JobsDetails$! : Observable<JobDetailsDto[]>
  public JobsDetails : JobDetailsDto[] = [];
  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = [];
  @Select(InfrastructureState.pens) Pens$! : Observable<PenDto[]>
  public Pens : PenDto[] = [];
  @Select(WorkState.workers) Workers$! : Observable<UserDto[]>
  public Workers : UserDto[] = [];

  public Data$ = combineLatest([this.JobsDetails$, this.Jobs$, this.Cows$, this.Pens$, this.Workers$])

  Date: Date | undefined;
  SelectedDate!: string;

  override ngOnInit(): void{
    super.ngOnInit();

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),tap(([jd,j,c,p,w]) =>{
        this.JobsDetails = jd;
        this.Jobs = j;
        this.Cows = c;
        this.Pens = p;
        this.Workers = w;
      })).subscribe({
      })

    this.store.dispatch(new Jobs.GetAll());
    this.store.dispatch(new Jobs.GetAllDetails());
    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Pens.GetAll());
    this.store.dispatch(new Workers.GetAll());
  }

  createJobDialog(): void {
    const dialogRef = this.dialogService.open(CreateJobDialogComponent, {
      header: 'Créer une nouvelle tâche',
      height: '450px',
      width: '500px',
      data: {Cows: this.Cows, Pens: this.Pens},
    });

    dialogRef.onClose.subscribe(result => {
      if(result == null)
        return;
      this.store.dispatch(new Jobs.Create({body:result})).subscribe({
        next:() => this.toastSuccess("La tâche a été ajoutée avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
    // const dialogRef = this.dialog.open(CreateJobDialogComponent, {
    //   height: '400px',
    //   width: '500px',
    //   data: {Cows: this.Cows, Pens: this.Pens},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(result == null)
    //     return;
    //   this.store.dispatch(new Jobs.Create({body:result})).subscribe({
    //     next:() => this.toastSuccess("La tâche a été ajoutée avec succès"),
    //     error:() => this.toastError("Une erreur s'est produite")
    //   });
    // });
  }

  public ShowAll(): void{
    this.Date = undefined;
    this.store.dispatch(new Jobs.GetAll());
    this.store.dispatch(new Jobs.GetAllDetails());
    this.jobList.showAll()
  }

  public SelectWorker(worker:UserDto): void{
    this.jobList.filterByWorker(worker);
  }
  public SelectPen(pen:PenDto): void{
    this.jobList.filterByPen(pen);
  }

  public SelectDate(): void{
    let ddate : string = moment(this.Date).format('YYYY-MM-DD');
    this.SelectedDate = ddate;
    this.store.dispatch(new Jobs.GetAllByDate(ddate))
    this.store.dispatch(new Jobs.GetAllDetailsByDate(ddate))
  }

  public SetDateAsToday(): void{
    this.Date = new Date();
    this.SelectDate();
  }
}
