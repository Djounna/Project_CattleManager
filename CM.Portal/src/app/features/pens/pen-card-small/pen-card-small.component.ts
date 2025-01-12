import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PenDto } from '../../../api/models';

@Component({
    selector: 'app-pen-card-small',
    templateUrl: './pen-card-small.component.html',
    styleUrl: './pen-card-small.component.scss',
    standalone: false
})
export class PenCardSmallComponent {

  @HostListener("click") onClick(){
    this.onSelected.emit();
  }

  @Input('Pen') Pen: PenDto | undefined;
  @Output() onSelected: EventEmitter<void> = new EventEmitter 
}
