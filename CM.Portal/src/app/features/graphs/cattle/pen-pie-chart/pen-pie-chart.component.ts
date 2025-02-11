import { Component, Input } from '@angular/core';
import { CattleStatisticsDto } from '../../../../api/models';

@Component({
  selector: 'app-pen-pie-chart',
  standalone: false,
  
  templateUrl: './pen-pie-chart.component.html',
  styleUrl: './pen-pie-chart.component.scss'
})
export class PenPieChartComponent {
  public graphData: any;
  @Input() set data(value: CattleStatisticsDto | undefined){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.graphData =  {
        labels: value?.penStatistics?.map(p => p.penName),
        datasets: [
            {
                data: value?.penStatistics?.map(p => p.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-emerald-200'), documentStyle.getPropertyValue('--p-emerald-400'), documentStyle.getPropertyValue('--p-emerald-600'), documentStyle.getPropertyValue('--p-emerald-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 
  };
}
