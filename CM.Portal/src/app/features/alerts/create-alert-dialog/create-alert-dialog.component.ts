import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../state/alert/alert.action';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertDto } from '../../../api/models';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';

@Component({
  selector: 'app-create-alert-dialog',
  standalone: false,
  
  templateUrl: './create-alert-dialog.component.html',
  styleUrl: './create-alert-dialog.component.scss'
})
export class CreateAlertDialogComponent extends BaseComponent{

  @Input() cowId : number | undefined;
  @Input() penId: number | undefined;

  constructor( 
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }
  
  public createAlertForm!: FormGroup;
  public newAlert : AlertDto | undefined;
  public pens: any[] = []
  public penDict : Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void{
    this.penDict.forEach((value, key) => {
      this.pens.push({
        id: key,
        name: value
      });
    }) 
    this.createAlertForm = this.formBuilder.group({
      title:['', Validators.required],
      description:['', Validators.required],
      level:['', Validators.required],
      cowId:[this.cowId],
      penId:[this.penId],
    });
  }

  public OnCreate(): void {
    this.newAlert = {
      id : 0,
      title : this.createAlertForm.value.title,
      description : this.createAlertForm.value.description,
      level: this.createAlertForm.value.level,
      cowId: this.cowId !== undefined ? this.createAlertForm.value.cowId : null,
      penId: this.penId !== undefined ? this.createAlertForm.value.penId : null
    };

      this.store.dispatch(new Alerts.Create({ body: this.newAlert })).subscribe({
        next: () => this.toastSuccess("L'alerte a été créée avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });

    this.dialogRef.close(this.newAlert);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
