import { Component, Input } from '@angular/core';
import { CattleStatisticsDto } from '../../../../api/models';

@Component({
  selector: 'app-age-pie-chart',
  standalone: false,
  
  templateUrl: './age-pie-chart.component.html',
  styleUrl: './age-pie-chart.component.scss'
})
export class AgePieChartComponent {
  public graphData: any;
  @Input() set data(value: CattleStatisticsDto | undefined){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.graphData =  {
        labels: value?.ageGroupStatistics?.map(a => a.ageGroupName),
        datasets: [
            {
                data: value?.ageGroupStatistics?.map(a => a.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-teal-200'), documentStyle.getPropertyValue('--p-teal-400'), documentStyle.getPropertyValue('--p-teal-600'), documentStyle.getPropertyValue('--p-teal-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 
  };
}
