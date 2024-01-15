import { Component, Input } from '@angular/core';
import { AlertDto } from '../../../api/models';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.css'
})
export class AlertListComponent {
  @Input() Alerts : AlertDto[] = [];
}
