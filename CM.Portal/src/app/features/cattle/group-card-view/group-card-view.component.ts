import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
  selector: 'app-group-card-view',
  templateUrl: './group-card-view.component.html',
  styleUrl: './group-card-view.component.scss'
})
export class GroupCardViewComponent {
  @Input() Groups : GroupDto[] = [];
}
