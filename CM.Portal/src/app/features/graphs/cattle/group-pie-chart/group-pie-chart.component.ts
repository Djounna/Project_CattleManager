import { Component, Input } from '@angular/core';
import { CattleStatisticsDto, PenStatisticDto } from '../../../../api/models';

@Component({
  selector: 'app-group-pie-chart',
  standalone: false,
  
  templateUrl: './group-pie-chart.component.html',
  styleUrl: './group-pie-chart.component.scss'
})
export class GroupPieChartComponent {
  public graphData: any;
  @Input() set data(value: CattleStatisticsDto | undefined){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.graphData =  {
        labels: value?.groupStatistics?.map(g => g.groupName),
        datasets: [
            {
                data: value?.groupStatistics?.map(g => g.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-lime-200'), documentStyle.getPropertyValue('--p-lime-400'), documentStyle.getPropertyValue('--p-lime-600'), documentStyle.getPropertyValue('--p-lime-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 
  };
}
