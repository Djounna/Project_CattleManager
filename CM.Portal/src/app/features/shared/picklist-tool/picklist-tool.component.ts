import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CowDto, GroupDetailsDto, GroupDto, PenDetailsDto, PenDto } from '../../../api/models';
import { GroupService, PenService } from '../../../api/services';
import { takeUntil } from 'rxjs';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { BaseComponent } from '../../../shared/base-component.component';

@Component({
  selector: 'app-picklist-tool',
  templateUrl: './picklist-tool.component.html',
  styleUrl: './picklist-tool.component.css'
})
export class PicklistToolComponent extends BaseComponent {

  groupService = inject(GroupService);
  penService = inject(PenService);

  @Input() Cows : CowDto[] = [];
  @Input() Groups : GroupDto[] = [];
  @Input() Pens : PenDto[] = [];
  @Input() Mode: string = 'Group';
  @Output() onClose : EventEmitter<void> = new EventEmitter<void>

  sourceId: number = 0;
  targetId: number = 0;
  source: CowDto[] = [];
  target: CowDto[] = [];
  sourceName: string = 'source';
  targetName: string = 'target';
  selectedSourceGroup: GroupDto | undefined;
  selectedTargetGroup: GroupDto | undefined;
  selectedSourcePen: PenDto | undefined;
  selectedTargetPen: PenDto | undefined;

  @Input('SourceId') set SourceId(value:number){
    this.sourceId = value;
    switch(this.Mode){
      case 'Group':
        this.source = [...(this.Cows.filter(c => c.groupId == value))]; //structuredClone(this.Cows.filter(c => c.groupId == value));
        this.selectedSourceGroup = this.Groups.find(g => g.id === value);
        this.sourceName = this.selectedSourceGroup?.name!; 
        break;
      case 'Pen':
        this.source = [...(this.Cows.filter(c => c.penId == value))]; //structuredClone(this.Cows.filter(c => c.penId == value));
        this.selectedSourcePen  = this.Pens.find(p => p.id === value);
        this.sourceName = this.selectedSourcePen?.name!; 
        break;
    }
  } 

  @Input('TargetId') set TargetId(value:number){
    this.targetId = value;
    switch(this.Mode){
      case 'Group':
        this.target = [...(this.Cows.filter(c => c.groupId == value))];
        this.selectedTargetGroup = this.Groups.find(g => g.id === value);
        this.targetName = this.selectedTargetGroup?.name!; 
        break;
      case 'Pen':
        this.target = [...(this.Cows.filter(c => c.penId == value))];
        this.selectedTargetPen = this.Pens.find(p => p.id === value);
        this.targetName = this.selectedTargetPen?.name!; 
        break;
    }
  }

  Save(): void{
    switch(this.Mode){
      case 'Group':
        let groupToSend : GroupDetailsDto = {
          id : this.selectedTargetGroup!.id,
          name: this.selectedTargetGroup!.name,
          cows : this.target,
        }
        debugger;
        this.groupService.apiGroupAssignPost({body: groupToSend})
        .pipe(takeUntil(this.$OnDestroyed))
        .subscribe({
          next:(res) => this.store.dispatch(new Cows.GetAll()),
          error:(err) => console.log(err) 
        })
      break;

      case 'Pen':
        let penToSend : PenDetailsDto = {
          id : this.selectedTargetPen!.id,
          name: this.selectedTargetPen!.name,
          size: this.selectedTargetPen!.size,
          cows : this.target,
        }
        debugger;
        this.penService.apiPenAssignPost({body: penToSend})
        .pipe(takeUntil(this.$OnDestroyed))
        .subscribe({
          next:(res) => this.store.dispatch(new Cows.GetAll()),
          error:(err) => console.log(err) 
        })
      break;
      }
      this.onClose.next();
    }
}
