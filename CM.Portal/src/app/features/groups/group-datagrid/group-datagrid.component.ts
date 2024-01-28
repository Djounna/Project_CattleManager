import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
  selector: 'app-group-datagrid',
  templateUrl: './group-datagrid.component.html',
  styleUrl: './group-datagrid.component.css'
})
export class GroupDatagridComponent {
  @Input() Groups : GroupDto[] = []
}
