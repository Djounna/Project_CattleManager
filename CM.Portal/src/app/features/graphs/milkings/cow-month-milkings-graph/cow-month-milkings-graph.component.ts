import { Component, Input } from '@angular/core';
import { MilkingDto, MilkingVolumeDto } from '../../../../api/models';

@Component({
  selector: 'app-cow-month-milkings-graph',
  standalone: false,
  templateUrl: './cow-month-milkings-graph.component.html',
  styleUrl: './cow-month-milkings-graph.component.scss'
})
export class CowMonthMilkingsGraphComponent {
  public graphData : any;
  public basicOptions: any;

  private milkings!: MilkingDto[];
  @Input() set Milkings(value: MilkingDto[]){
    this.milkings = value;
    this.transformData();
  }
  private milkingVolumes!: MilkingVolumeDto[];
  @Input() set MilkingVolumes(value :MilkingVolumeDto[]){
    this.milkingVolumes = value;
    this.transformData();
  }

  private transformData(): void{
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color'); 
    this.basicOptions = {}
    this.graphData =  {
        labels: this.milkings.map(d => d.date),
        datasets: [
            {
                type: 'bar',
                label: 'Volume (L)',
                data: this.milkings.map(d => d.volume),
                backgroundColor: [documentStyle.getPropertyValue('--p-lime-200'), documentStyle.getPropertyValue('--p-lime-400'), documentStyle.getPropertyValue('--p-lime-600'), documentStyle.getPropertyValue('--p-lime-800')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400')]
            },
            {
                type: 'line',
                label: 'Moyenne (L)',
                data: this.milkingVolumes.map(d => d.average),
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    }; 
  }
}
