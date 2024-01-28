import { Component, Inject } from '@angular/core';
import { JobDto, UserDto, WorkerJobDto } from '../../../../api/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-job-dialog',
  standalone: true,
  imports: [],
  templateUrl: './assign-job-dialog.component.html',
  styleUrl: './assign-job-dialog.component.css'
})
export class AssignJobDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AssignJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Job:JobDto, Workers: UserDto[]}
  ){}

  public newWorkerJob : WorkerJobDto | undefined;
  public selectedWorker : UserDto | undefined;

  OnCreate(): void {
    debugger
    this.newWorkerJob = {
      id : 0,
      workerId: this.selectedWorker!.id,
      jobId: this.data.Job.id,
    }
    this.dialogRef.close(this.newWorkerJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
