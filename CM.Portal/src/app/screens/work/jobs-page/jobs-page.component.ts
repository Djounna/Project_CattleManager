import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, finalize, takeUntil } from 'rxjs';
import { CowDto, JobDto, PenDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { Jobs } from '../../../state/work/work.actions';
import { WorkState } from '../../../state/work/work.store';
import { CreateJobDialogComponent } from '../../../features/work/job/create-job-dialog/create-job-dialog.component';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css'
})
export class JobsPageComponent extends BaseComponent {

  @Select(WorkState.jobs) jobs$! : Observable<JobDto[]>
  public Jobs : JobDto[] = [];
  @Select(CattleState.cows) cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = [];
  @Select(InfrastructureState.pens) pens$! : Observable<PenDto[]>
  public Pens : PenDto[] = [];

  override ngOnInit(): void{

    this.displayLoader = true;

  this.jobs$.pipe(
    takeUntil(this.$Destroyed), 
    finalize(() => this.displayLoader = false))
    .subscribe({
      next:(jobs) => {
        debugger;
        this.Jobs = jobs;
        this.displayLoader = false
      }
    });

  this.cows$.pipe(
    takeUntil(this.$Destroyed), 
    finalize(() => this.displayLoader = false))
    .subscribe({
      next:(cows) => {
        debugger;
        this.Cows = cows;
      }
    });

  this.pens$.pipe(
    takeUntil(this.$Destroyed))
    .subscribe({
      next:(pens) => {
        debugger;
        this.Pens = pens;
      }
    });

    this.store.dispatch(new Jobs.GetAll());
    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Pens.GetAll());
  }

  // Test
  createJobDialog(): void {
    const dialogRef = this.dialog.open(CreateJobDialogComponent, {
      height: '300px',
      width: '300px',
      data: {Cows: this.Cows, Pens: this.Pens},
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      this.store.dispatch(new Jobs.Create({body:result}));
    });
  }
}
