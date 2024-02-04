import { Component, Input } from '@angular/core';
import { CowDto, GroupDto, PenDto } from '../../../api/models';

@Component({
  selector: 'app-picklist-tool',
  templateUrl: './picklist-tool.component.html',
  styleUrl: './picklist-tool.component.css'
})
export class PicklistToolComponent {

  @Input() Cows : CowDto[] = [];
  @Input() Groups : GroupDto[] = [];
  @Input() Pens : PenDto[] = [];
  @Input() Mode: string = 'Group';

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



  // public set SelectedSourceGroup(value: GroupDto){
  //   this.selectedSourceGroup = value;
  //   this.source = JSON.parse(JSON.stringify(this.Cows.filter(c => c.groupId == value.id)));
  // }

  // public set SelectedTargetGroup(value: GroupDto){
  //   this.selectedTargetGroup = value;
  //   this.target = JSON.parse(JSON.stringify(this.Cows.filter(c => c.groupId == value.id)));
  // }

  // public set SelectedSourcePen(value: PenDto){
  //   this.selectedSourcePen = value;
  //   this.source = JSON.parse(JSON.stringify(this.Cows.filter(c => c.penId == value.id)));
  // }

  // public set SelectedTargetPen(value: PenDto){
  //   this.selectedTargetPen = value;
  //   this.target = JSON.parse(JSON.stringify(this.Cows.filter(c => c.penId == value.id)));
  // }
}
