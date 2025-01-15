import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { VaccinationDto } from '../../../api/models';

@Component({
  selector: 'app-create-vaccination-dialog',
  standalone: false,
  
  templateUrl: './create-vaccination-dialog.component.html',
  styleUrl: './create-vaccination-dialog.component.scss'
})
export class CreateVaccinationDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }

  public newVaccination: VaccinationDto | undefined;

  createVaccinationForm = this.formBuilder.group({
    name: ['', Validators.required],
    cowId: [0, Validators.required],
    date:[new Date(),Validators.required],
  })

  OnCreate(): void {
    this.newVaccination = {
      id : 0,
      name: this.createVaccinationForm.value.name!,
      cowId: this.createVaccinationForm.value.cowId!,
      date:this.createVaccinationForm.value.date?.toISOString(), 
    };

    this.dialogRef.close(this.newVaccination);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
