import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CowDto, PenDto, JobDto } from '../../../../api/models';
import { jobStatus } from '../../../../models/enums/workEnums';
import { CreateJobDialogComponent } from '../../../work/job/create-job-dialog/create-job-dialog.component';

@Component({
  selector: 'app-create-cow-dialog',
  templateUrl: './create-cow-dialog.component.html',
  styleUrl: './create-cow-dialog.component.css'
})
export class CreateCowDialogComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateJobDialogComponent>,
  ){}

  public newCow : CowDto | undefined;

  cowForm = this.formBuilder.group({
    identifier:['', Validators.required],
    name:['', Validators.required],
    birthdate:['',Validators.required],
  })

  OnCreate(): void {
    debugger
    this.newCow = {
      id : 0,
      identifier : this.cowForm.value.identifier, 
      name : this.cowForm.value.name,
    }
    this.dialogRef.close(this.newCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
