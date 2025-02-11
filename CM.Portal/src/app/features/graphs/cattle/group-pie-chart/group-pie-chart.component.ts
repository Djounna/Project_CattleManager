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
    this.graphData =  {
        labels: value?.groupStatistics?.map(g => g.groupName),
        datasets: [
            {
                data: value?.groupStatistics?.map(d => d.number),
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            }
        ]
    }; 
  };
}
