import { Component, Input } from '@angular/core';
import { InterventionDto } from '../../../../api/models';

@Component({
    selector: 'app-intervention-list',
    templateUrl: './intervention-list.component.html',
    styleUrl: './intervention-list.component.scss',
    standalone: false
})
export class InterventionListComponent {
  @Input() Interventions : InterventionDto[] = []
}
