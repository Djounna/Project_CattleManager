import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GroupDto } from '../../../api/models';

@Component({
    selector: 'app-group-card-small',
    templateUrl: './group-card-small.component.html',
    styleUrl: './group-card-small.component.scss',
    standalone: false
})
export class GroupCardSmallComponent {

  @HostListener("click") onClick(){
    this.onSelected.emit();
  }

  @Input('Group') Group: GroupDto | undefined;
  @Output() onSelected: EventEmitter<void> = new EventEmitter 
}
