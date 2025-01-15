import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InterventionDto } from '../../../api/models';

@Component({
  selector: 'app-update-intervention-dialog',
  standalone: false,

  templateUrl: './update-intervention-dialog.component.html',
  styleUrl: './update-intervention-dialog.component.scss'
})
export class UpdateInterventionDialogComponent extends BaseComponent {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ) {
    super();
  }

  public intervention!: InterventionDto;
  public updatedIntervention!: InterventionDto;
  public updateInterventionForm!: FormGroup;

  override ngOnInit(): void {
    this.intervention = this.dialogConfig.data;
    this.updateInterventionForm = this.formBuilder.group({
      date: [this.intervention.date, Validators.required],
    })
  }

  public OnUpdate(): void {
    this.updatedIntervention = {
      ... this.intervention,
      date: this.updateInterventionForm.value.date,
    };

    this.dialogRef.close(this.updatedIntervention);
  }

  OnCancel(): void {
    this.dialogRef.close();
  }
}
