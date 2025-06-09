import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component.component';
import { Pens } from '../../../../state/infrastructure/infrastructure.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PenDto } from '../../../../api/models';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-pen-dialog',
  standalone: false,
  
  templateUrl: './update-pen-dialog.component.html',
  styleUrl: './update-pen-dialog.component.scss'
})
export class UpdatePenDialogComponent extends BaseComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  public Pen!: PenDto;
  public UpdatedPen : PenDto | undefined;
  public UpdatePenForm!: FormGroup

  override ngOnInit(): void {
    super.ngOnInit();
    this.Pen = this.dialogConfig.data;
    this.initForm();
  }

  private initForm(): void{
    this.UpdatePenForm = this.formBuilder.group({
      name:[this.Pen.name, Validators.required],
      size:[this.Pen.size, Validators.required],
      coordinates:[this.Pen.coordinates]
    })
  }

  OnUpdate(): void {
    this.UpdatedPen = {
      ... this.Pen,
      name : this.UpdatePenForm.value.name,
      size : this.UpdatePenForm.value.size,
      coordinates : this.UpdatePenForm.value.coordinates,
    };

    this.store.dispatch(new Pens.Update({body:this.UpdatedPen})).subscribe({
      next:() => this.toastSuccess("L'enclos a été mis à jour avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.UpdatedPen);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
