import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { GroupDto } from '../../../../api/models';
import { Groups } from '../../../../state/cattle/cattle.actions';
import { DialogComponent } from '../../../../shared/dialog-component.component';

@Component({
    selector: 'app-create-group-dialog',
    templateUrl: './create-group-dialog.component.html',
    styleUrl: './create-group-dialog.component.scss',
    standalone: false
})
export class CreateGroupDialogComponent extends DialogComponent{

  constructor(){
    super();
  }

  public NewGroup : GroupDto | undefined;
  public GroupForm!: FormGroup

  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void{
    this.GroupForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.maxLength(25)]],
      description:['', [Validators.required, , Validators.maxLength(200)]],
      imgLink:[''],
    })
  }

  OnCreate(): void {
    this.NewGroup = {
      id : 0,
      name : this.GroupForm.value.name,
      description : this.GroupForm.value.description,
      imgLink: this.GroupForm.value?.imgLink
    };

    this.store.dispatch(new Groups.Create({body:this.NewGroup})).subscribe({
      next:() => this.toastSuccess("Le groupe a été ajoutée avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.NewGroup);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
