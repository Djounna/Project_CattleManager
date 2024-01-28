import { Component, Input } from '@angular/core';
import { JobDetailsDto } from '../../../api/models';

@Component({
  selector: 'app-job-details-list',
  templateUrl: './job-details-list.component.html',
  styleUrl: './job-details-list.component.css'
})
export class JobDetailsListComponent {
  @Input() JobsDetails : JobDetailsDto[] = []
}
