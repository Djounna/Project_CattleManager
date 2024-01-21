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
  styleUrl: './workers-page.component.css'
})
export class WorkersPageComponent extends BaseComponent{

  @Select(workStore.WorkState.workers) Workers$! : Observable<UserDto[]>
  public Workers : UserDto[] = [];

  override ngOnInit(): void{

    this.displayLoader = true;

    this.Workers$.pipe(
      takeUntil(this.$Destroyed))
      .subscribe({
        next:(workers) => {
          this.Workers = workers;
          this.displayLoader = false
        },
        error:(err) => {
          console.log(err);
          this.displayLoader = false
        }
    });

    this.store.dispatch(new Workers.GetAll());
  }
}
