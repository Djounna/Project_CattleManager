import { Component, Input } from '@angular/core';
import { ActivityType } from '../../../models/enums/activity-type';

@Component({
  selector: 'app-activities-shortlist',
  standalone: false,

  templateUrl: './activities-shortlist.component.html',
  styleUrl: './activities-shortlist.component.scss'
})
export class ActivitiesShortlistComponent {

  @Input() Individual: boolean = true;
  @Input() CowId: number = 0;
  @Input() ChosenActivityType!: ActivityType;
  @Input() Activities: any[] | null | undefined = [];

  public ActivityType = ActivityType;
}
