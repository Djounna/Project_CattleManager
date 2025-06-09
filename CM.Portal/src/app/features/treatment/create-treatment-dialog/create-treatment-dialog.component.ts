import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CowDto, TreatmentDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { Treatments } from '../../../state/cattle/cattle.actions';
import { SelectOption } from '../../../models/interfaces/common';
import { TreatmentType } from '../../../models/enums/treatment-type';

@Component({
  selector: 'app-create-treatment-dialog',
  standalone: false,
  
  templateUrl: './create-treatment-dialog.component.html',
  styleUrl: './create-treatment-dialog.component.scss'
})
export class CreateTreatmentDialogComponent extends BaseComponent{

  public Cow!: CowDto;
  public CreateTreatmentForm!: FormGroup;
  public NewTreatment: TreatmentDto | undefined;

  public TreatmentTypeSelection : string[] = Object.values(TreatmentType);
  // public TreatmentTypeSelection : SelectOption<string>[] = Object.values(TreatmentType).map(r => {
  //   return {
  //     Label: r.toString(),
  //     Value: r.toString()
  //   }
  // });

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();


    this.Cow = this.dialogConfig.data;
    this.CreateTreatmentForm = this.formBuilder.group({
      identifier: [this.Cow.identifier],
      name: ['', Validators.required],
      type: ['', Validators.required],
      date:[new Date(),Validators.required],
    });
  }


  OnCreate(): void {
    this.NewTreatment = {
      id : 0,
      cowId: this.Cow.id!,
      name: this.CreateTreatmentForm.value.name!,
      type: this.CreateTreatmentForm.value.type!,
      date:this.CreateTreatmentForm.value.date?.toISOString(), 
    };

    this.store.dispatch(new Treatments.Create({ body: this.NewTreatment })).subscribe({
      next: () => this.toastSuccess("Le traitement a été ajouté avec succès"),
      error: () => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.NewTreatment);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
