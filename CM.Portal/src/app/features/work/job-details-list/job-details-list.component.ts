import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { JobDetailsDto, PenDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { AssignJobDialogComponent } from '../job/assign-job-dialog/assign-job-dialog.component';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api/menuitem';
import { UpdateJobDialogComponent } from '../job/update-job-dialog/update-job-dialog.component';

@Component({
    selector: 'app-job-details-list',
    templateUrl: './job-details-list.component.html',
    styleUrl: './job-details-list.component.scss',
    standalone: false
})
export class JobDetailsListComponent extends BaseComponent {
  @Input() Workers : UserDto[] = []
  @Output() onJobUpdated: EventEmitter<void> = new EventEmitter<void>()
  @Output() onFocusJob : EventEmitter<JobDetailsDto> = new EventEmitter<JobDetailsDto>();
  @Input() ShowZoomOption: boolean = true;

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
  public get FilteredJobs(): JobDetailsDto[]{
    return this.filteredJobs;
  }

  public menuItems:MenuItem[] | undefined;


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
      if(result != null)
        this.onJobUpdated.next();
    });
  }

  public updateJobDialog(job: any): void{
    const dialogRef = this.dialogService.open(UpdateJobDialogComponent, {
      header: 'Mettre à jour une tâche',
      height: '300px',
      width: '300px',
      data: {Job: job},
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null)
        this.onJobUpdated.next();
    });
  }

  /* ****************************************** */

  // override ngOnInit(): void {
  //   this.menuItems = [ 
  //   {
  //     label:'Options',
  //     items:[
  //       {
  //         label: 'En cours',
  //         icon: 'pi pi-plus-circle',
  //         command: (job) => {this.SetJobOngoing(job)}
  //       },
  //       {
  //         label: 'Vaccination',
  //         icon: 'pi pi-plus-circle',
  //         command: (job) => {this.SetJobDone(job)}
  //       },
  //     ]
  //   }]
  // }

  // SetJobOngoing(job: any){
  //   debugger;
  //   let updatedJob: JobDto = {
  //     ... job,
  //     status : JobStatus.OnGoing
  //   }
  //   this.store.dispatch(new Jobs.Update(updatedJob))
  // }

  // SetJobDone(job: any){
  //   debugger;
  //   let updatedJob: JobDto = {
  //     ... job,
  //     status : JobStatus.Done
  //   }
  //   this.store.dispatch(new Jobs.Update(updatedJob))
  // }
}
