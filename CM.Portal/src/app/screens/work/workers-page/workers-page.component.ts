import { Component } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { UserDto } from '../../../api/models';
import { Select } from '@ngxs/store';
import * as workStore from '../../../state/work/work.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Workers } from '../../../state/work/work.actions';
import { CreateUserDialogComponent } from '../../../features/users/user/create-user-dialog/create-user-dialog.component';
import { User } from '../../../state/user/user.action';

@Component({
    selector: 'app-workers-page',
    templateUrl: './workers-page.component.html',
    styleUrl: './workers-page.component.scss',
    standalone: false
})
export class WorkersPageComponent extends BaseComponent{

  @Select(workStore.WorkState.workers) Workers$! : Observable<UserDto[]>
  public Workers : UserDto[] = [];

  override ngOnInit(): void{
    super.ngOnInit();
    this.getData();
  }

  private getData():void {
    this.Workers$.pipe(
      takeUntil(this.$OnDestroyed))
      .subscribe({
        next:(workers) => this.Workers = workers,
        error:(err) =>  console.log(err) 
    });

    this.store.dispatch(new Workers.GetAll());
  }

  public createUserDialog(): void{
    const dialogRef = this.dialogService.open(CreateUserDialogComponent, {
      header: 'Créer un utilisateur',
      height: '450px',
      width: '500px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new User.Create({body: result})).subscribe({
        next: () => {
          this.toastSuccess("L'utilisateur a été créé avec succès");
          this.store.dispatch(new Workers.GetAll()).subscribe();
        },
        error: () => {
          this.toastError("Une erreur s'est produite")
        }
      });
    });
  }
  
}
