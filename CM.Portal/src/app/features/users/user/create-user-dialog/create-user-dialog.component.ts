import { Component } from '@angular/core';
import { Roles } from '../../../../models/enums/roles';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from '../../../../shared/base-component.component';
import { SelectOption } from '../../../../models/interfaces/common';
import { UserInput } from '../../../../api/models';

@Component({
  selector: 'app-create-user-dialog',
  standalone: false,
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent extends BaseComponent {

  constructor( private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
  ){
    super();
  }

  public createUserForm!: FormGroup; 
  private newUser! : UserInput;
  Roles = Roles;
  public RoleSelection : SelectOption<string>[] = Object.values(this.Roles).map(r => {
    return {
      Label: r.toString(),
      Value: r.toString()
    }
  });
  override ngOnInit(): void{
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void{
    this.createUserForm = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      username:['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
      password: ['', Validators.required]
    });
  }

  public OnCreate(): void {
    this.newUser = {
      roleName: "Worker",
      email:  this.createUserForm.value.email,
      firstname: this.createUserForm.value.firstname,
      lastname: this.createUserForm.value.lastname,
      username:  this.createUserForm.value.username,
      password: this.createUserForm.value.password
    };

    this.dialogRef.close(this.newUser);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}