import { Component, Input } from '@angular/core';
import { UserDto } from '../../../api/models';

@Component({
  selector: 'app-workers-list-view',
  templateUrl: './workers-list-view.component.html',
  styleUrl: './workers-list-view.component.scss'
})
export class WorkersListViewComponent {
  @Input() Workers : UserDto[] = []
}
