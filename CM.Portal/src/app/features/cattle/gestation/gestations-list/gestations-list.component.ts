import { Component, Input } from '@angular/core';
import { GestationDto } from '../../../../api/models';

@Component({
    selector: 'app-gestations-list',
    templateUrl: './gestations-list.component.html',
    styleUrl: './gestations-list.component.scss',
    standalone: false
})
export class GestationsListComponent {
  @Input() Gestations: GestationDto[] = [];
}
