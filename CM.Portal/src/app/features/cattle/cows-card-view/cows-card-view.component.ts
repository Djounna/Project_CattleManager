import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
  selector: 'app-cows-card-view',
  standalone: false,
  imports: [],
  templateUrl: './cows-card-view.component.html',
  styleUrl: './cows-card-view.component.scss'
})
export class CowsCardViewComponent {
  @Input() Groups : GroupDto[] = [];
}
