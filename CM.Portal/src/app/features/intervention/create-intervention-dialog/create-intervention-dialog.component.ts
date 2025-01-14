import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../shared/base-component.component';
import { InterventionDto } from '../../../api/models';

@Component({
  selector: 'app-create-intervention-dialog',
  templateUrl: './create-intervention-dialog.component.html',
  styleUrl: './create-intervention-dialog.component.scss',
  standalone: false,
})
export class CreateInterventionDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }

  public newIntervention: InterventionDto | undefined;

  createInterventionForm = this.formBuilder.group({
    cowId: [0, Validators.required],
    intervenantId: [0, Validators.required], 
    description: ['', Validators.required], 
    status: ['', Validators.required],
    type: ['', Validators.required],
    date:[new Date(),Validators.required],
  })

  OnCreate(): void {
    this.newIntervention = {
      id : 0,
      cowId: this.createInterventionForm.value.cowId!,
      intervenantId: this.createInterventionForm.value.intervenantId!,
      description: this.createInterventionForm.value.description,
      status: this.createInterventionForm.value.status,
      type: this.createInterventionForm.value.type,
      date:this.createInterventionForm.value.date?.toISOString(), 
    };

    this.dialogRef.close(this.newIntervention);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
