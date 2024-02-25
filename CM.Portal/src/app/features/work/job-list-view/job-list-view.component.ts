import { Component, Input } from '@angular/core';
import { JobDto } from '../../../api/models';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrl: './job-list-view.component.scss'
})
export class JobListViewComponent {
  @Input() Jobs : JobDto[] = [];
}
