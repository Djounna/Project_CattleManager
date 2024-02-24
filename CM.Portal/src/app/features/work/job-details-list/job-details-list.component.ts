import { Component, Input } from '@angular/core';
import { JobDetailsDto, UserDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { AssignJobDialogComponent } from '../job/assign-job-dialog/assign-job-dialog.component';
import { Jobs } from '../../../state/work/work.actions';

@Component({
  selector: 'app-job-details-list',
  templateUrl: './job-details-list.component.html',
  styleUrl: './job-details-list.component.css'
})
export class JobDetailsListComponent extends BaseComponent {
  @Input() JobsDetails : JobDetailsDto[] = []
  @Input() Workers : UserDto[] = []

  public assignJobDialog(job:any) : void{

    const dialogRef = this.dialog.open(AssignJobDialogComponent, {
      height: '200px',
      width: '300px',
      data: {Job: job, Workers: this.Workers},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == null)
        return;
      this.store.dispatch(new Jobs.Assign({body:result})).subscribe({
        next:() => this.toastSuccess("La tâche a été modifiée avec succès"),
        error:() => this.toastError("Une erreur s'est produite")
      });
    });
  }
}
