import { Component, Input } from '@angular/core';
import { MilkingVolumeDto } from '../../../../api/models';

@Component({
    selector: 'app-month-milkings-graph',
    templateUrl: './month-milkings-graph.component.html',
    styleUrl: './month-milkings-graph.component.scss',
    standalone: false
})
export class MonthMilkingsGraphComponent {
  public graphData : any;
  public basicOptions: any;

  @Input() set MilkingVolumes(value :MilkingVolumeDto[]){
    this.transformData(value);
  }

  private transformData(data : MilkingVolumeDto[]): void{
    this.basicOptions = {}
    this.graphData =  {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: 'Volume (L)',
                data: data.map(d => d.volume),
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    }; 
  }
}

