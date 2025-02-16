import { Component, Input, ViewChild } from '@angular/core';
import { JobDetailsDto, JobDto, PenDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { AssignJobDialogComponent } from '../job/assign-job-dialog/assign-job-dialog.component';
import { Jobs } from '../../../state/work/work.actions';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-job-details-list',
    templateUrl: './job-details-list.component.html',
    styleUrl: './job-details-list.component.scss',
    standalone: false
})
export class JobDetailsListComponent extends BaseComponent {
  @Input() Workers : UserDto[] = []

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

  public assignJobDialog(job:any) : void{

    const dialogRef = this.dialog.open(AssignJobDialogComponent, {
      height: '200px',
      width: '300px',
      data: {Job: job, Workers: this.Workers},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == null)
        return;
      this.store.dispatch(new Jobs.Assign({body:result})).subscribe({
        next:() => this.toastSuccess("La tâche a été modifiée avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
