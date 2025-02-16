import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { UserDto, JobDto, JobDetailsDto, PenDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Jobs } from '../../../state/work/work.actions';
import { JobStatus } from '../../../models/enums/workEnums';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent extends BaseComponent{
  public JobStatus = JobStatus;
  @ViewChild('dt') dt: any;
  private jobs : JobDetailsDto[] = [];
  public filteredJobs : JobDetailsDto[] = [];
  @Input() Worker!: UserDto;
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
  public filterByPen(pen: PenDto){
    this.filteredJobs = [...this.jobs.filter(c => c?.pen?.id === pen.id)];
  }

  public MarkAsDoing(job: JobDto){
    if(job.status === JobStatus.OnGoing || job.status === JobStatus.Done){
      return;
    }
    this.updateJobStatus(job, JobStatus.OnGoing)
  }

  public MarkAsDone(job: JobDto){
    if(job.status === JobStatus.ToDo || job.status === JobStatus.Done){ 
      return;
    }
    this.updateJobStatus(job, JobStatus.Done)
  }

  private updateJobStatus(job: JobDto, status: JobStatus){
    let jobToUpdate: JobDto = {
      ...job,
      status: status
    }

    this.store.dispatch(new Jobs.Update(jobToUpdate))
      .subscribe({
        next: (res) => this.toastSuccess("La tâche à été mise à jour avec succès"),
        error: (err) => this.toastError("Une erreur s'est produite durant la mise à jour de la tâche")
      })
  }
}
