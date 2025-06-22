import { Component, Input } from '@angular/core';
import { HistoryEvent } from '../../../../models/history/historyEvent';

@Component({
  selector: 'app-cow-timeline',
  standalone: false,
  
  templateUrl: './cow-timeline.component.html',
  styleUrl: './cow-timeline.component.scss'
})
export class CowTimelineComponent {

  private historyEvents: HistoryEvent[] = [];
  @Input() set HistoryEvents (value: HistoryEvent[]){
    this.historyEvents = value
  }
  get HistoryEvents(): HistoryEvent[]{
    return this.historyEvents
  }
}
