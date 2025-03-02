import { Component } from '@angular/core';
import { Observable, finalize, takeUntil } from 'rxjs';
import { UserDto } from '../../../api/models';
import { Select } from '@ngxs/store';
import * as workStore from '../../../state/work/work.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Workers } from '../../../state/work/work.actions';

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

    this.Workers$.pipe(
      takeUntil(this.$OnDestroyed))
      .subscribe({
        next:(workers) => this.Workers = workers,
        error:(err) =>  console.log(err) 
    });

    this.store.dispatch(new Workers.GetAll());
  }
}
