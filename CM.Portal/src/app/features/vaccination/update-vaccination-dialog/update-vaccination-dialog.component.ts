import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { VaccinationDto } from '../../../api/models';

@Component({
  selector: 'app-update-vaccination-dialog',
  standalone: false,

  templateUrl: './update-vaccination-dialog.component.html',
  styleUrl: './update-vaccination-dialog.component.scss'
})
export class UpdateVaccinationDialogComponent extends BaseComponent{

  constructor(private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ) {
    super();
  }

  public vaccination!: VaccinationDto;
  public updateVaccinationForm!: FormGroup;
  public updatedVaccination!: VaccinationDto;

  override ngOnInit(): void {
    this.vaccination = this.dialogConfig.data;
    this.updateVaccinationForm = this.formBuilder.group({
      name: [this.vaccination.name, Validators.required],
      date: [this.vaccination.date, Validators.required],
    })
  }

  public OnUpdate(): void {
    this.updatedVaccination = {
      ... this.vaccination,
      name: this.updateVaccinationForm.value.name,
      date: this.updateVaccinationForm.value.date.toISOString(),
    };

    this.dialogRef.close(this.updatedVaccination);
  }

  OnCancel(): void {
    this.dialogRef.close();
  }
}
