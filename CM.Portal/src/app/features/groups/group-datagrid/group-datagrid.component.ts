import { Component, Input } from '@angular/core';
import { GroupDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';

@Component({
  selector: 'app-group-datagrid',
  templateUrl: './group-datagrid.component.html',
  styleUrl: './group-datagrid.component.css'
})
export class GroupDatagridComponent extends BaseComponent{
  @Input() Groups : GroupDto[] = []

  public assignGroupDialog(group: any): void {
    return;
  } 
}
