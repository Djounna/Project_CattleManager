import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../shared/base-component.component';
import { CowDto, InterventionDto } from '../../../api/models';

@Component({
  selector: 'app-create-intervention-dialog',
  templateUrl: './create-intervention-dialog.component.html',
  styleUrl: './create-intervention-dialog.component.scss',
  standalone: false,
})
export class CreateInterventionDialogComponent extends BaseComponent {
  public Cow!: CowDto;
  public CreateInterventionForm!: FormGroup;
  public NewIntervention: InterventionDto | undefined;

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.Cow = this.dialogConfig.data;
    this.CreateInterventionForm = this.formBuilder.group({
      // cowId: [0, Validators.required],
      intervenantId: [0, Validators.required], 
      description: ['', Validators.required], 
      status: ['', Validators.required],
      type: ['', Validators.required],
      date:[new Date(),Validators.required],
    });
  }


  OnCreate(): void {
    this.NewIntervention = {
      id : 0,
      cowId: this.Cow.id,
      intervenantId: this.CreateInterventionForm.value.intervenantId!,
      description: this.CreateInterventionForm.value.description,
      status: this.CreateInterventionForm.value.status,
      type: this.CreateInterventionForm.value.type,
      date:this.CreateInterventionForm.value.date?.toISOString(), 
    };

    this.dialogRef.close(this.NewIntervention);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
