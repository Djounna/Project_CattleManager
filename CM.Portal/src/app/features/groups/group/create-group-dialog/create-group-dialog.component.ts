import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupDto } from '../../../../api/models';

@Component({
    selector: 'app-create-group-dialog',
    templateUrl: './create-group-dialog.component.html',
    styleUrl: './create-group-dialog.component.scss',
    standalone: false
})
export class CreateGroupDialogComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateGroupDialogComponent>,
  ){}

  public newGroup : GroupDto | undefined;

  groupForm = this.formBuilder.group({
    name:['', Validators.required],
    description:['', Validators.required],
    imgLink:[''],
  })

  OnCreate(): void {
    this.newGroup = {
      id : 0,
      name : this.groupForm.value.name,
      description : this.groupForm.value.description,
      imgLink: this.groupForm.value?.imgLink
    };
    this.dialogRef.close(this.newGroup);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
