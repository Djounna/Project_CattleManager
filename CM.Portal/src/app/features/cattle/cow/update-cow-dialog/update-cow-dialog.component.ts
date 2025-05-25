import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CowDto } from '../../../../api/models';
import { CattleState } from '../../../../state/cattle/cattle.store';
import { InfrastructureState } from '../../../../state/infrastructure/infrastructure.store';
import { Cows } from '../../../../state/cattle/cattle.actions';

@Component({
    selector: 'app-update-cow-dialog',
    templateUrl: './update-cow-dialog.component.html',
    styleUrl: './update-cow-dialog.component.scss',
    standalone: false
})
export class UpdateCowDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  public cow!: CowDto;
  public updateCowForm!: FormGroup;
  public updatedCow!: CowDto;
  public groupDict : Map<number, string> = this.store.selectSnapshot(CattleState.groupDict);
  public penDict : Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
  public groups: any[] = [];   
  public pens: any[] = []

  override ngOnInit(): void {
    super.ngOnInit();

    this.cow = this.dialogConfig.data;
    this.updateCowForm = this.formBuilder.group({
      name:[this.cow.name, Validators.required],
      penId:[this.cow.penId, Validators.required],
      groupId:[this.cow.groupId, Validators.required],
      milkcow:[this.cow.milkCow]
    })
    this.groupDict.forEach((value, key) => {
      this.groups.push({
        id: key,
        name: value
      });
    }) 
    this.penDict.forEach((value, key) => {
      this.pens.push({
        id: key,
        name: value
      });
    }) 
  }


  public OnUpdate(): void {
    this.updatedCow = {
      ... this.cow,
      name : this.updateCowForm.value.name,
      groupId: this.updateCowForm.value.groupId,
      penId: this.updateCowForm.value.penId,
      milkCow: this.updateCowForm.value.milkcow,
    };

      this.store.dispatch(new Cows.Update({ body: this.updatedCow })).subscribe({
        next: () => this.toastSuccess("L'animal a été modifié avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });

    this.dialogRef.close(this.updatedCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
