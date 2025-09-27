import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PenDto } from '../../../../api/models';
import { Pens } from '../../../../state/infrastructure/infrastructure.action';
import { DialogComponent } from '../../../../shared/dialog-component.component';

@Component({
  selector: 'app-create-pen-dialog',
  standalone: false,
  
  templateUrl: './create-pen-dialog.component.html',
  styleUrl: './create-pen-dialog.component.scss'
})
export class CreatePenDialogComponent extends DialogComponent{

  constructor(){
    super();
  }

  public NewPen : PenDto | undefined;
  public NewPenForm!: FormGroup

  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void{
    this.NewPenForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.maxLength(25)]],
      size:[0, Validators.required],
      coordinates:['']
    })
  }

  OnCreate(): void {
    this.NewPen = {
      id : 0,
      name : this.NewPenForm.value.name,
      size : this.NewPenForm.value.size,
      coordinates : this.NewPenForm.value.coordinates,
    };

    this.store.dispatch(new Pens.Create({body:this.NewPen})).subscribe({
      next:() => this.toastSuccess("L'enclos a été ajoutée avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.NewPen);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
