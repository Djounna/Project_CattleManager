import { Component, Inject } from '@angular/core';
import { JobDetailsDto, JobDto, UserDto, WorkerJobDto } from '../../../../api/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../shared/base-component.component';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Jobs } from '../../../../state/work/work.actions';

@Component({
    selector: 'app-assign-job-dialog',
    templateUrl: './assign-job-dialog.component.html',
    styleUrl: './assign-job-dialog.component.scss',
    standalone: false
})
export class AssignJobDialogComponent extends BaseComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  public Job : JobDetailsDto | undefined;
  public Workers: UserDto[] = [];
  public newWorkerJob : WorkerJobDto | undefined;
  public selectedWorker : UserDto | undefined;

  override ngOnInit(): void {
    super.ngOnInit();
    this.Job = this.dialogConfig.data.Job;
    this.Workers = this.dialogConfig.data.Workers; 
  }

  OnConfirm(): void {
    this.newWorkerJob = {
      id : 0,
      userId: this.selectedWorker!.id,
      jobId: this.Job?.id,
    }

    this.store.dispatch(new Jobs.Assign({body:this.newWorkerJob})).subscribe({
      next:() => this.toastSuccess("La tâche a été modifiée avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.newWorkerJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
