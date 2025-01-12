import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
    selector: 'app-group-card',
    templateUrl: './group-card.component.html',
    styleUrl: './group-card.component.scss',
    standalone: false
})
export class GroupCardComponent {

  @Input() Group : GroupDto | undefined;
}
