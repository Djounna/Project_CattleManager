import { Component, inject, Input } from '@angular/core';
import { CowDetailsDto } from '../../../../api/models';
import { HistoryEvent } from '../../../../models/history/historyEvent';
import { HistoryService } from '../../../../services/history.service';

@Component({
  selector: 'app-cow-timeline',
  standalone: false,
  
  templateUrl: './cow-timeline.component.html',
  styleUrl: './cow-timeline.component.scss'
})
export class CowTimelineComponent {
  historyService = inject(HistoryService); 

  public events: HistoryEvent[]=[];
  private cowDetails!: CowDetailsDto;
  get CowDetails(): CowDetailsDto{
    return this.cowDetails;
  }
  @Input() set CowDetails(value:CowDetailsDto){
    this.events = this.historyService.GenerateHistoryEvents(value); 
  }
}
