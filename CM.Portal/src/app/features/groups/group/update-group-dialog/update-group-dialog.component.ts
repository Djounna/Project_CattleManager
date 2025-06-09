import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupDto } from '../../../../api/models';
import { Groups } from '../../../../state/cattle/cattle.actions';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-group-dialog',
  standalone: false,
  
  templateUrl: './update-group-dialog.component.html',
  styleUrl: './update-group-dialog.component.scss'
})
export class UpdateGroupDialogComponent extends BaseComponent{

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
  ){
    super();
  }

  public Group!: GroupDto;
  public UpdatedGroup : GroupDto | undefined;
  public UpdateGroupForm!: FormGroup

  override ngOnInit(): void {
    super.ngOnInit();
    this.Group = this.dialogConfig.data;
    this.initForm();
  }

  private initForm(): void{
    this.UpdateGroupForm = this.formBuilder.group({
      name:[this.Group.name, Validators.required],
      description:[this.Group.description, Validators.required],
      imgLink:[this.Group?.imgLink ?? null]
    })
  }

  OnUpdate(): void {
    this.UpdatedGroup = {
      ... this.Group,
      name : this.UpdateGroupForm.value.name,
      description : this.UpdateGroupForm.value.description,
      imgLink: this.UpdateGroupForm.value.imgLink ?? null
    };

    this.store.dispatch(new Groups.Update({body:this.UpdatedGroup})).subscribe({
      next:() => this.toastSuccess("Le groupe a été mis à jour avec succès"),
      error:() => this.toastError("Une erreur s'est produite")
    });

    this.dialogRef.close(this.UpdatedGroup);
  }

  OnCancel(): void{
    this.dialogRef.close();
  }
}
