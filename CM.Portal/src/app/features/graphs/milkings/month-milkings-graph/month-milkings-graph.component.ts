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
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.basicOptions = {}
    this.graphData =  {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: 'Volume (L)',
                data: data.map(d => d.volume),
                backgroundColor: [documentStyle.getPropertyValue('--p-lime-200'), documentStyle.getPropertyValue('--p-lime-400'), documentStyle.getPropertyValue('--p-lime-600'), documentStyle.getPropertyValue('--p-lime-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            }
        ]
    }; 
  }
}

