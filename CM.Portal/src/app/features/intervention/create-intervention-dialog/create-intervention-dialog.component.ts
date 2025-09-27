import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CowDto, InterventionDto } from '../../../api/models';
import { Interventions } from '../../../state/cattle/cattle.actions';
import { DialogComponent } from '../../../shared/dialog-component.component';

@Component({
  selector: 'app-create-intervention-dialog',
  templateUrl: './create-intervention-dialog.component.html',
  styleUrl: './create-intervention-dialog.component.scss',
  standalone: false,
})
export class CreateInterventionDialogComponent extends DialogComponent {
  public Cow!: CowDto;
  public CreateInterventionForm!: FormGroup;
  public NewIntervention: InterventionDto | undefined;

  constructor(){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.Cow = this.dialogConfig.data;
    this.CreateInterventionForm = this.formBuilder.group({
      // identifier: [this.Cow.identifier, Validators.required],
      // intervenantId: [0], 
      description: ['', [Validators.required, Validators.maxLength(200)]], 
      type: ['', [Validators.required, Validators.maxLength(200)]],
      date:[new Date(),Validators.required],
    });
  }


  OnCreate(): void {
    this.NewIntervention = {
      id : 0,
      cowId: this.Cow.id,
      // intervenantId: this.CreateInterventionForm.value.intervenantId!,
      description: this.CreateInterventionForm.value.description,
      type: this.CreateInterventionForm.value.type,
      date:this.CreateInterventionForm.value.date?.toISOString(), 
    };

      this.store.dispatch(new Interventions.Create({ body: this.NewIntervention })).subscribe({
        next: () => this.toastSuccess("L'intervention a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });

    this.dialogRef.close(this.NewIntervention);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
