import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../state/alert/alert.action';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertDto, CowDto, PenDto } from '../../../api/models';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { SelectOption } from '../../../models/interfaces/common';
import { AlertLevel } from '../../../models/enums/alert-level';

@Component({
  selector: 'app-create-alert-dialog',
  standalone: false,
  
  templateUrl: './create-alert-dialog.component.html',
  styleUrl: './create-alert-dialog.component.scss'
})
export class CreateAlertDialogComponent extends BaseComponent{
  AlertLevels = AlertLevel;
  public Cow: CowDto | undefined;
  public Pen: PenDto | undefined;
  public createAlertForm!: FormGroup;
  public newAlert : AlertDto | undefined;
  public pens: any[] = []
  public penDict : Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
  public AlertLevelSelection : SelectOption<string>[] = Object.values(this.AlertLevels).map(r => {
    return {
      Label: r.toString(),
      Value: r.toString()
    }
  });
  
  constructor( 
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.Cow = this.dialogConfig.data?.cow ?? undefined;
    this.Pen = this.dialogConfig.data?.pen ?? undefined;
    this.initForm();
  }

  private initForm(): void{
    this.penDict.forEach((value, key) => {
      this.pens.push({
        id: key,
        name: value
      });
    }) 
      if (this.Cow !== undefined)
      {
        this.createAlertForm = this.formBuilder.group({
          title:['', Validators.required],
          description:['', Validators.required],
          level:['', Validators.required],
          cowId:[this.Cow.id],
        });
      } else if (this.Pen !== undefined){
        this.createAlertForm = this.formBuilder.group({
          title:['', Validators.required],
          description:['', Validators.required],
          level:['', Validators.required],
          penId:[this.Pen.id],
        });
      }
  }

  public OnCreate(): void {
    this.newAlert = {
      id : 0,
      title : this.createAlertForm.value.title,
      description : this.createAlertForm.value.description,
      level: this.createAlertForm.value.level,
      cowId: this.Cow !== undefined ? this.createAlertForm.value.cowId : null,
      penId: this.Pen !== undefined ? this.createAlertForm.value.penId : null
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
