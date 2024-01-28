import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, finalize, takeUntil, tap } from 'rxjs';
import { CowDto, JobDetailsDto, JobDto, PenDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { Jobs, Workers } from '../../../state/work/work.actions';
import { WorkState } from '../../../state/work/work.store';
import { CreateJobDialogComponent } from '../../../features/work/job/create-job-dialog/create-job-dialog.component';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css'
})
export class JobsPageComponent extends BaseComponent {

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

  override ngOnInit(): void{

  this.Data$.pipe(
      takeUntil(this.$Destroyed),tap(([jd,j,c,p,w]) =>{
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
    const dialogRef = this.dialog.open(CreateJobDialogComponent, {
      height: '400px',
      width: '700px',
      data: {Cows: this.Cows, Pens: this.Pens},
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if(result == null)
        return;
      this.store.dispatch(new Jobs.Create({body:result})).subscribe({
        next:() => this.toastSuccess("La tâche a été ajoutée avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
