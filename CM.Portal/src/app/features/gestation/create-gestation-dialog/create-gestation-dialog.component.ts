import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CowDto, GestationDto } from '../../../api/models';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../shared/base-component.component';
import { CowUtils } from '../../../utils/cow-utils';

@Component({
  selector: 'app-create-gestation-dialog',
  standalone: false,
  
  templateUrl: './create-gestation-dialog.component.html',
  styleUrl: './create-gestation-dialog.component.scss'
})
export class CreateGestationDialogComponent extends BaseComponent{
  public Cow!: CowDto;
  public CreateGestationForm!: FormGroup;
  public NewGestation: GestationDto | undefined;

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.Cow = this.dialogConfig.data;
    this.CreateGestationForm = this.formBuilder.group({
      identifier: [this.Cow.identifier],
      startDate:[new Date(),Validators.required],
    });
  }

  OnCreate(): void {
    let startDate = this.CreateGestationForm.value.startDate?.toISOString();
    let calvingDate = CowUtils.GetCalvingDateFromStartDate(new Date(startDate)).toISOString();

    this.NewGestation = {
      id : 0,
      cowId: this.Cow.id,
      status: 'En cours',
      startDate: startDate, 
      calvingDate: calvingDate
    };

    this.dialogRef.close(this.NewGestation);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
