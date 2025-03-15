import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CowDto } from '../../../../api/models';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Races } from '../../../../models/enums/races';
import { Genders } from '../../../../models/enums/genders';
import { BaseComponent } from '../../../../shared/base-component.component';
import { CattleState } from '../../../../state/cattle/cattle.store';
import { InfrastructureState } from '../../../../state/infrastructure/infrastructure.store';

@Component({
    selector: 'app-create-cow-dialog',
    templateUrl: './create-cow-dialog.component.html',
    styleUrl: './create-cow-dialog.component.scss',
    standalone: false
})
export class CreateCowDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }
  
  public createCowForm!: FormGroup;
  public newCow : CowDto | undefined;
  public races : string[] = Object.values(Races);
  public genders : string[] = Object.values(Genders);
  public groupDict : Map<number, string> = this.store.selectSnapshot(CattleState.groupDict);
  public penDict : Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
  public groups: any[] = [];   
  public pens: any[] = []
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void{
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
    this.createCowForm = this.formBuilder.group({
      identifier:['', Validators.required],
      name:['', Validators.required],
      birthdate:[new Date(),Validators.required],
      race:['', Validators.required],
      gender:['', Validators.required],
      penId:[0, Validators.required],
      groupId:[0, Validators.required]
    });
  }

  public OnCreate(): void {
    this.newCow = {
      id : 0,
      identifier : this.createCowForm.value.identifier, 
      name : this.createCowForm.value.name,
      birthDate:this.createCowForm.value.birthdate?.toISOString(), 
      race : this.createCowForm.value.race,
      gender : this.createCowForm.value.gender,
      groupId: this.createCowForm.value.groupId,
      penId: this.createCowForm.value.penId,
      imgLink: ""
    };

    this.dialogRef.close(this.newCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
