import { Component, Input } from '@angular/core';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { BaseComponent } from '../../../shared/base-component.component';
import { PicklistGroupDialogComponent } from '../../shared/dialogs/picklist-group-dialog/picklist-group-dialog.component';

@Component({
  selector: 'app-group-datagrid',
  templateUrl: './group-datagrid.component.html',
  styleUrl: './group-datagrid.component.scss'
})
export class GroupDatagridComponent extends BaseComponent{
  @Input() Cows : CowDto[] = [];
  @Input() Groups : GroupDto[] = [];

  picklistGroupDialog(group: any): void{
    const dialogRef2 = this.dialog.open(PicklistGroupDialogComponent, {
      height: '80vh',
      width: '80vw',
      data: {Cows: this.Cows, Groups: this.Groups, SourceId: group.id} 
    });

    dialogRef2.afterClosed().subscribe(result => {
      if(result == null)
        return;
    });
  }
}
