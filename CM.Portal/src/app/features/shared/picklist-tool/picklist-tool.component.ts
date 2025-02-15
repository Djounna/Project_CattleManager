import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AssignGroupDetailsDto, AssignPenDetailsDto, CowDto, GroupDetailsDto, GroupDto, PenDetailsDto, PenDto } from '../../../api/models';
import { GroupService, PenService } from '../../../api/services';
import { takeUntil } from 'rxjs';
import { Cows } from '../../../state/cattle/cattle.actions';
import { BaseComponent } from '../../../shared/base-component.component';

@Component({
    selector: 'app-picklist-tool',
    templateUrl: './picklist-tool.component.html',
    styleUrl: './picklist-tool.component.scss',
    standalone: false
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
        let group1 : GroupDetailsDto = {
          id : this.selectedSourceGroup!.id,
          name: this.selectedSourceGroup!.name,
          cows : this.source,
        };
        let group2 : GroupDetailsDto = {
          id : this.selectedTargetGroup!.id,
          name: this.selectedTargetGroup!.name,
          cows : this.target,
        };
        let dto : AssignGroupDetailsDto = {
          group1 : group1,
          group2 : group2
        }
        this.groupService.apiGroupAssignPost({body: dto})
        .pipe(takeUntil(this.$OnDestroyed))
        .subscribe({
          next:(res) => this.store.dispatch(new Cows.GetAll()),
          error:(err) => console.log(err) 
        })
      break;

      case 'Pen':
        let pen1 : PenDetailsDto = {
          id : this.selectedSourcePen!.id,
          name: this.selectedSourcePen!.name,
          cows : this.source,
        };
        let pen2 : PenDetailsDto = {
          id : this.selectedTargetPen!.id,
          name: this.selectedTargetPen!.name,
          cows : this.target,
        };
        let dto2 : AssignPenDetailsDto = {
          pen1 : pen1,
          pen2 : pen2
        }
        this.penService.apiPenAssignPost({body: dto2})
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
