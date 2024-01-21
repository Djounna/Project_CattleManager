import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CowDto, JobDto, PenDto } from '../../../../api/models';
import { jobStatus } from '../../../../models/enums/workEnums';

@Component({
  selector: 'app-create-job-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ButtonModule,

  ],
  templateUrl: './create-job-dialog.component.html',
  styleUrl: './create-job-dialog.component.css'
})
export class CreateJobDialogComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Cows:CowDto[], Pens: PenDto[]}
  ){}

  public newJob : JobDto | undefined;

  jobForm = this.formBuilder.group({
    title:['', Validators.required],
    description:['', Validators.required],
    length:[''],
  })

  OnCreate(): void {
    debugger
    this.newJob = {
      id : 0,
      status : jobStatus.ToDo,
      title : this.jobForm.value.title,
      description : this.jobForm.value.description,
    }
    // Object.assign(this.newJob!, this.jobForm.value);
    this.dialogRef.close(this.newJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
