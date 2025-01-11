import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CowDto } from '../../../../api/models';
import { genders } from '../../../../models/enums/genders';
import { races } from '../../../../models/enums/races';
import { CattleState } from '../../../../state/cattle/cattle.store';
import { InfrastructureState } from '../../../../state/infrastructure/infrastructure.store';

@Component({
  selector: 'app-update-cow-dialog',
  templateUrl: './update-cow-dialog.component.html',
  styleUrl: './update-cow-dialog.component.scss'
})
export class UpdateCowDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }

  public cow!: CowDto;
  public updatedCow!: CowDto;
  public groupDict : Map<number, string> = this.store.selectSnapshot(CattleState.groupDict);
  public penDict : Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
  public groups: any[] = [];   
  public pens: any[] = []

  override ngOnInit(): void {
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

  updateCowForm = this.formBuilder.group({
    name:['', Validators.required],
    penId:[0, Validators.required],
    groupId:[0, Validators.required]
  })

  private GetData(){

  }

  public OnUpdate(): void {
    this.updatedCow = {
      ... this.cow,
      name : this.updateCowForm.value.name,
      groupId: this.updateCowForm.value.groupId,
      penId: this.updateCowForm.value.penId,
    };

    this.dialogRef.close(this.updatedCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
