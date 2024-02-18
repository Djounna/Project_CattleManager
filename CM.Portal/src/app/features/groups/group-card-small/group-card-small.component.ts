import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
  selector: 'app-group-card-small',
  templateUrl: './group-card-small.component.html',
  styleUrl: './group-card-small.component.css'
})
export class GroupCardSmallComponent {
  @Input('Group') Group: GroupDto | undefined;
}
