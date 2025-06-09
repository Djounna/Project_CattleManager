import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CowDto } from '../../../../api/models';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Races } from '../../../../models/enums/races';
import { Genders } from '../../../../models/enums/genders';
import { BaseComponent } from '../../../../shared/base-component.component';
import { CattleState } from '../../../../state/cattle/cattle.store';
import { InfrastructureState } from '../../../../state/infrastructure/infrastructure.store';
import { Cows } from '../../../../state/cattle/cattle.actions';

@Component({
    selector: 'app-create-cow-dialog',
    templateUrl: './create-cow-dialog.component.html',
    styleUrl: './create-cow-dialog.component.scss',
    standalone: false
})
export class CreateCowDialogComponent extends BaseComponent {

  constructor( 
    private formBuilder: FormBuilder,
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
  public maleDict : Map<number, string> = this.store.selectSnapshot(CattleState.cowIdentifierMaleDict);
  public femaleDict : Map<number, string> = this.store.selectSnapshot(CattleState.cowIdentifierFemaleDict);
  public groups: any[] = [];   
  public pens: any[] = []
  public males: any[] = []
  public females: any[] = []
  
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
    this.maleDict.forEach((value, key) => {
      this.males.push({
        id: key,
        name: value
      });
    }) 
    this.femaleDict.forEach((value, key) => {
      this.females.push({
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
      fatherId:[],
      motherId:[],
      penId:[],
      groupId:[],
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
      motherId: this.createCowForm.value.fatherId ?? null,
      fatherId: this.createCowForm.value.motherId ?? null,
      groupId: this.createCowForm.value.groupId ?? null,
      penId: this.createCowForm.value.penId ?? null,
      imgLink: ""
    };

      this.store.dispatch(new Cows.Create({ body: this.newCow })).subscribe({
        next: () => this.toastSuccess("L'animal a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });

    this.dialogRef.close(this.newCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
