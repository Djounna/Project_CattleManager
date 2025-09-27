import { Component, Input } from '@angular/core';
import { CattleStatisticsDto } from '../../../../api/models';

@Component({
  selector: 'app-age-bar-chart',
  standalone: false,
  
  templateUrl: './age-bar-chart.component.html',
  styleUrl: './age-bar-chart.component.scss'
})
export class AgeBarChartComponent {
  public graphData: any;
  public graphOptions : any;
  @Input() set data(value: CattleStatisticsDto | undefined){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    this.graphData =  {
        labels: value?.ageGroupStatistics?.filter(a => a.ageGroupName !== "0").map(a => a.ageGroupName),
        datasets: [
            {
                label: 'Femelles',
                data: value?.ageGenderGroupStatisticsFemale?.map(a => a.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-teal-200')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            },
            {
                label: 'Mâles',
                data: value?.ageGenderGroupStatisticsMale?.map(a => a.number),
                backgroundColor: [documentStyle.getPropertyValue('--p-teal-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 

    this.graphOptions = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary,
                  stepSize: 1,
                  font: {
                      weight: 500
                  }
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
    };
  }
}
