import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CowDto, VaccinationDto } from '../../../api/models';
import { Vaccinations } from '../../../state/cattle/cattle.actions';

@Component({
  selector: 'app-create-vaccination-dialog',
  standalone: false,
  
  templateUrl: './create-vaccination-dialog.component.html',
  styleUrl: './create-vaccination-dialog.component.scss'
})
export class CreateVaccinationDialogComponent extends BaseComponent {
  public Cow!: CowDto;
  public CreateVaccinationForm!: FormGroup;
  public NewVaccination: VaccinationDto | undefined;

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.Cow = this.dialogConfig.data;
    this.CreateVaccinationForm = this.formBuilder.group({
      identifier: [this.Cow.identifier],
      // cowId: [0, Validators.required],
      name: ['', Validators.required],
      date:[new Date(),Validators.required],
    });
  }


  OnCreate(): void {
    this.NewVaccination = {
      id : 0,
      cowId: this.Cow.id!,
      name: this.CreateVaccinationForm.value.name!,
      date:this.CreateVaccinationForm.value.date?.toISOString(), 
    };

    this.store.dispatch(new Vaccinations.Create({ body: this.NewVaccination })).subscribe({
      next: () => this.toastSuccess("La vaccination a été créé avec succès"),
      error: () => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.NewVaccination);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
