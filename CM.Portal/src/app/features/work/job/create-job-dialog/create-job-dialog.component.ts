import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { CowDto, JobDto, PenDto } from '../../../../api/models';
import { jobStatus } from '../../../../models/enums/workEnums';

@Component({
    selector: 'app-create-job-dialog',
    templateUrl: './create-job-dialog.component.html',
    styleUrl: './create-job-dialog.component.scss',
    standalone: false
})
export class CreateJobDialogComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Cows:CowDto[], Pens: PenDto[]}
  ){}

  public newJob : JobDto | undefined;
  public selectedPen : PenDto | undefined;
  public selectedCow : CowDto | undefined;

  jobForm = this.formBuilder.group({
    title:['', Validators.required],
    description:['', Validators.required],
    length:[''],
    pen:new FormControl<PenDto | null>(null),
    cow:new FormControl<CowDto | null>(null)
  })

  OnCreate(): void {
    this.newJob = {
      id : 0,
      title : this.jobForm.value.title, 
      description : this.jobForm.value.description,
      status : jobStatus.ToDo,
      penId: this.jobForm.value.pen?.id,
      cowId: this.jobForm.value.cow?.id
    }
    this.dialogRef.close(this.newJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
