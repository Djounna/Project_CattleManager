import { Component, Inject } from '@angular/core';
import { JobDetailsDto, UserDto, WorkerJobDto } from '../../../../api/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-assign-job-dialog',
    templateUrl: './assign-job-dialog.component.html',
    styleUrl: './assign-job-dialog.component.scss',
    standalone: false
})
export class AssignJobDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AssignJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Job:JobDetailsDto, Workers: UserDto[]}
  ){}

  public newWorkerJob : WorkerJobDto | undefined;
  public selectedWorker : UserDto | undefined;

  OnConfirm(): void {
    this.newWorkerJob = {
      id : 0,
      userId: this.selectedWorker!.id,
      jobId: this.data.Job.id,
    }
    this.dialogRef.close(this.newWorkerJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
