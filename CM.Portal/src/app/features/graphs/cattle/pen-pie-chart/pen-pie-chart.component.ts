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
    debugger;
    this.graphData =  {
        labels: value?.penStatistics?.map(p => p.penName),
        datasets: [
            {
                data: value?.penStatistics?.map(p => p.number),
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            }
        ]
    }; 
  };
}
