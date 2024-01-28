import { Component, Input } from '@angular/core';
import { CowDto } from '../../../api/models';

@Component({
  selector: 'app-picklist-tool',
  templateUrl: './picklist-tool.component.html',
  styleUrl: './picklist-tool.component.css'
})
export class PicklistToolComponent {
  @Input() sourceGroup : CowDto[] = []
  @Input() targetGroup : CowDto[] = []
}
