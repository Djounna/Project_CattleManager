import { Component } from '@angular/core';
import { Roles } from '../../../../models/enums/roles';
import { FormGroup, Validators } from '@angular/forms';
import { SelectOption } from '../../../../models/interfaces/common';
import { UserInput } from '../../../../api/models';
import { DialogComponent } from '../../../../shared/dialog-component.component';

@Component({
  selector: 'app-create-user-dialog',
  standalone: false,
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent extends DialogComponent {

  constructor(){
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
      email:['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      firstname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      lastname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
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