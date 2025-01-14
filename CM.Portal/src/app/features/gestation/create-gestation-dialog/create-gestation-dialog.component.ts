import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GestationDto } from '../../../api/models';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../shared/base-component.component';

@Component({
  selector: 'app-create-gestation-dialog',
  standalone: false,
  
  templateUrl: './create-gestation-dialog.component.html',
  styleUrl: './create-gestation-dialog.component.scss'
})
export class CreateGestationDialogComponent extends BaseComponent{

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }

  public newGestation: GestationDto | undefined;

  createGestationForm = this.formBuilder.group({
    cowId: [0, Validators.required],
    status: ['', Validators.required],
    startDate:[new Date(),Validators.required],
  })

  OnCreate(): void {
    this.newGestation = {
      id : 0,
      cowId: this.createGestationForm.value.cowId!,
      status: this.createGestationForm.value.status,
      startDate:this.createGestationForm.value.startDate?.toISOString(), 
    };

    this.dialogRef.close(this.newGestation);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
