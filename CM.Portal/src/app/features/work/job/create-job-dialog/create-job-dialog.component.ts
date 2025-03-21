import { Component, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { CowDto, JobDto, PenDto } from '../../../../api/models';
import { JobStatus } from '../../../../models/enums/workEnums';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../../shared/base-component.component';

@Component({
    selector: 'app-create-job-dialog',
    templateUrl: './create-job-dialog.component.html',
    styleUrl: './create-job-dialog.component.scss',
    standalone: false
})
export class CreateJobDialogComponent extends BaseComponent{

  constructor(

    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
    // public dialogRef: MatDialogRef<CreateJobDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: {Cows:CowDto[], Pens: PenDto[]}
  )
  {
    super();
  }

  public data: any;
  public newJob : JobDto | undefined;
  public selectedPen : PenDto | undefined;
  public selectedCow : CowDto | undefined;

  override ngOnInit(): void {
    super.ngOnInit();

    this.data = this.dialogConfig.data;
  }

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
      status : JobStatus.ToDo,
      penId: this.jobForm.value.pen?.id,
      cowId: this.jobForm.value.cow?.id
    }
    this.dialogRef.close(this.newJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
