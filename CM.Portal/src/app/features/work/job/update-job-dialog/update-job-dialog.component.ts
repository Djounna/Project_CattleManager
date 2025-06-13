import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { JobDetailsDto, JobDto, UserDto, WorkerJobDto } from '../../../../api/models';
import { Jobs } from '../../../../state/work/work.actions';
import { BaseComponent } from '../../../../shared/base-component.component';
import { JobStatus } from '../../../../models/enums/workEnums';

@Component({
  selector: 'app-update-job-dialog',
  standalone: false,
  
  templateUrl: './update-job-dialog.component.html',
  styleUrl: './update-job-dialog.component.scss'
})
export class UpdateJobDialogComponent extends BaseComponent {

  public status : string[] = Object.values(JobStatus);

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  public Job : JobDetailsDto | undefined;
  public UpdatedJobForm! : FormGroup;

  override ngOnInit(): void {
    super.ngOnInit();
    this.Job = this.dialogConfig.data.Job;

    this.UpdatedJobForm = this.formBuilder.group({
      status: [this.Job?.status ?? "", Validators.required]
    })
  }

  OnConfirm(): void {
    let updatedJob:JobDto = {
      ... 
      this.Job,
      status: this.UpdatedJobForm.value.status
    }

    this.store.dispatch(new Jobs.Update({body:updatedJob})).subscribe({
      next:() => this.toastSuccess("La tâche a été mise à jour avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(updatedJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
