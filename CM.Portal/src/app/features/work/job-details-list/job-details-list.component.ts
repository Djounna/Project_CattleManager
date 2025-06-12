import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { JobDetailsDto, PenDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { AssignJobDialogComponent } from '../job/assign-job-dialog/assign-job-dialog.component';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-job-details-list',
    templateUrl: './job-details-list.component.html',
    styleUrl: './job-details-list.component.scss',
    standalone: false
})
export class JobDetailsListComponent extends BaseComponent {
  @Input() Workers : UserDto[] = []
  @Output() onJobAssigned: EventEmitter<void> = new EventEmitter<void>()

  @ViewChild('dt') dt: any;
  private jobs : JobDetailsDto[] = [];
  public filteredJobs : JobDetailsDto[] = [];

  @Input() set JobsDetails(value: JobDetailsDto[]){
    this.jobs = [...value]
    this.filteredJobs = [...this.jobs];
  }   
  public get Jobs(): JobDetailsDto[] {
    return this.jobs;
  }

  @Output() onFocusJob : EventEmitter<JobDetailsDto> = new EventEmitter<JobDetailsDto>();

  applyFilterGlobal(event: any) {
    return event.target.value;
  }

  clear(table: Table) {
        table.clear();
  }

  public showAll(): void{
    this.filteredJobs = [...this.jobs];
  }
  public filterByWorker(worker:UserDto){
    this.filteredJobs = [...this.jobs.filter(c => c?.workers?.some(w => w.id === worker.id))];
  }
  public filterByPen(pen: PenDto){
    this.filteredJobs = [...this.jobs.filter(c => c?.pen?.id === pen.id)];
  }

  public FocusOnJob(job: JobDetailsDto){
    this.onFocusJob.emit(job);
  }

  public assignJobDialog(job:any) : void{
    const dialogRef = this.dialogService.open(AssignJobDialogComponent, {
      header: 'Assigner un travailleur',
      height: '450px',
      width: '300px',
      data: {Job: job, Workers: this.Workers},
    });

    dialogRef.onClose.subscribe(result => {
      if(result !== null)
        this.onJobAssigned.next();
    });
  }
}
