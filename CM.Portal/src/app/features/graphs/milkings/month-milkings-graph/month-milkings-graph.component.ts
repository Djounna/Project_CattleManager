import { Component, Input } from '@angular/core';
import { DateOnly, MilkingDto } from '../../../../api/models';

@Component({
  selector: 'app-month-milkings-graph',
  templateUrl: './month-milkings-graph.component.html',
  styleUrl: './month-milkings-graph.component.scss'
})
export class MonthMilkingsGraphComponent {

  public Data: MilkingData[] = [];
  public graphData : any;
  public basicOptions: any;

  @Input() set Milkings(value :MilkingDto[]){
    this.transformData(value);
  }

  private transformData(milkings : MilkingDto[]): void{

    this.Data = [];
    this.basicOptions = {}

    milkings.forEach(m => 
      {
      const d = this.Data.find(d => d.Date === m.date);
      if(!d){
        this.Data.push({
          Date: m.date,
          Volume: m.volume,
        })
      }
      else{
        d.Volume! += m.volume! 
      }
    });
  console.log(this.Data);

  this.graphData =  {
            labels: this.Data.map(d => d.Date),
            datasets: [
                {
                    label: 'Volume (L)',
                    data: this.Data.map(d => d.Volume),
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        }; 
  }
}

export interface MilkingData{
  Date: DateOnly | undefined,
  Volume: number | undefined,
}
