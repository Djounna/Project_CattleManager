import { Component, Input } from '@angular/core';
import { CattleStatisticsDto } from '../../../../api/models';

@Component({
  selector: 'app-race-pie-chart',
  standalone: false,
  
  templateUrl: './race-pie-chart.component.html',
  styleUrl: './race-pie-chart.component.scss'
})
export class RacePieChartComponent {
  public graphData: any;
  @Input() set data(value: CattleStatisticsDto | undefined){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.graphData =  {
        labels: value?.raceGroupStatistics?.map(a => a.raceGroupName),
        datasets: [
            {
                data: value?.raceGroupStatistics?.map(a => a.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-teal-200'), documentStyle.getPropertyValue('--p-teal-400'), documentStyle.getPropertyValue('--p-teal-600'), documentStyle.getPropertyValue('--p-teal-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 
  };
}
