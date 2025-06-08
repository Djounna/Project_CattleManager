import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CowDto, ConditionDto } from '../../../api/models';
import { Conditions } from '../../../state/cattle/cattle.actions';

@Component({
  selector: 'app-create-condition-dialog',
  standalone: false,
  
  templateUrl: './create-condition-dialog.component.html',
  styleUrl: './create-condition-dialog.component.scss'
})
export class CreateConditionDialogComponent extends BaseComponent{

  public Cow!: CowDto;
  public CreateConditionForm!: FormGroup;
  public NewCondition: ConditionDto | undefined;

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.Cow = this.dialogConfig.data;
    this.CreateConditionForm = this.formBuilder.group({
      identifier: [this.Cow.identifier],
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      date:[new Date(),Validators.required],
    });
  }


  OnCreate(): void {
    this.NewCondition = {
      id : 0,
      cowId: this.Cow.id!,
      name: this.CreateConditionForm.value.name!,
      type: this.CreateConditionForm.value.type!,
      status: this.CreateConditionForm.value.status!,
      startDate:this.CreateConditionForm.value.date?.toISOString(), 
    };

    this.store.dispatch(new Conditions.Create({ body: this.NewCondition })).subscribe({
      next: () => this.toastSuccess("L'affection a été ajoutée avec succès"),
      error: () => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.NewCondition);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
