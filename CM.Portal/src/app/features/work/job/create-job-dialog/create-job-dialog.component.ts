import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CowDto, JobDto, PenDto } from '../../../../api/models';
import { JobStatus } from '../../../../models/enums/workEnums';
import { DialogComponent } from '../../../../shared/dialog-component.component';

@Component({
    selector: 'app-create-job-dialog',
    templateUrl: './create-job-dialog.component.html',
    styleUrl: './create-job-dialog.component.scss',
    standalone: false
})
export class CreateJobDialogComponent extends DialogComponent{

  constructor()
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
    title:['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    description:['', [Validators.required, Validators.max(100)]],
    date:[new Date(), Validators.required],
    pen:new FormControl<PenDto | null>(null),
    cow:new FormControl<CowDto | null>(null)
  })

  OnCreate(): void {
    if(this.jobForm?.invalid){
      return;
    }

    this.newJob = {
      id : 0,
      title : this.jobForm.value.title, 
      description : this.jobForm.value.description,
      status : JobStatus.ToDo,
      date : this.jobForm.value.date?.toISOString(),
      penId: this.jobForm.value.pen?.id,
      cowId: this.jobForm.value.cow?.id
    }
    this.dialogRef.close(this.newJob);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
