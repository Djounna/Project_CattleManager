import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GestationDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';

@Component({
  selector: 'app-update-gestation-dialog',
  standalone: false,

  templateUrl: './update-gestation-dialog.component.html',
  styleUrl: './update-gestation-dialog.component.scss'
})
export class UpdateGestationDialogComponent extends BaseComponent{

  constructor(private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ) {
    super();
  }

  public gestation!: GestationDto;
  public updatedGestation!: GestationDto;
  public updateGestationForm!: FormGroup;

  override ngOnInit(): void {
    this.gestation = this.dialogConfig.data;
    this.updateGestationForm = this.formBuilder.group({
      startDate: [this.gestation.startDate, Validators.required],
      calvingDate: [this.gestation.calvingDate, Validators.required],
    })
  }

  public OnUpdate(): void {
    this.updatedGestation = {
      ... this.gestation,
      startDate: this.updateGestationForm.value.startDate,
      calvingDate: this.updateGestationForm.value.calvingDate,
    };

    this.dialogRef.close(this.updatedGestation);
  }

  OnCancel(): void {
    this.dialogRef.close();
  }
}
