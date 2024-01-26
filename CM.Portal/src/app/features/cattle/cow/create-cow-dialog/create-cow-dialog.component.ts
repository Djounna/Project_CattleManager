import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CowDto } from '../../../../api/models';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { races } from '../../../../models/enums/races';
import { genders } from '../../../../models/enums/genders';

@Component({
  selector: 'app-create-cow-dialog',
  templateUrl: './create-cow-dialog.component.html',
  styleUrl: './create-cow-dialog.component.css'
})
export class CreateCowDialogComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){}

  public newCow : CowDto | undefined;
  public races : string[] = Object.values(races);
  public genders : string[] = Object.values(genders);

  cowForm = this.formBuilder.group({
    identifier:['', Validators.required],
    name:['', Validators.required],
    birthdate:['',Validators.required],
    race:[''],
    gender:['']
  })

  OnCreate(): void {
    this.newCow = {
      id : 0,
      identifier : this.cowForm.value.identifier, 
      name : this.cowForm.value.name,
      race : this.cowForm.value.race,
      gender : this.cowForm.value.gender
    };
    this.dialogRef.close(this.newCow);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
