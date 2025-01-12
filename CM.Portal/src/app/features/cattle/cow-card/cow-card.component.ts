import { Component, Input } from '@angular/core';
import { CowDto } from '../../../api/models';

@Component({
    selector: 'app-cow-card',
    templateUrl: './cow-card.component.html',
    styleUrl: './cow-card.component.scss',
    standalone: false
})
export class CowCardComponent {
  @Input('Cow') Cow! : CowDto;
}
