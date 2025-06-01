import { Component, Input } from '@angular/core';
import { AlertDto } from '../../../api/models';

@Component({
  selector: 'app-side-alerts',
  standalone: false,
  
  templateUrl: './side-alerts.component.html',
  styleUrl: './side-alerts.component.scss'
})
export class SideAlertsComponent {
  private alerts : AlertDto[] = [];
  @Input() set Alerts(value : AlertDto[]){
    this.alerts = value;
  }
  public get Alerts(){
    return this.alerts;
  }
}
