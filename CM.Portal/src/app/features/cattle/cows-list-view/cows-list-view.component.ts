import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CowDto, GroupDto, PenDto } from '../../../api/models';


@Component({
  selector: 'app-cows-list-view',
  templateUrl: './cows-list-view.component.html',
  styleUrl: './cows-list-view.component.scss'
})
export class CowsListViewComponent {
  @ViewChild('dt') dt: any;

  private name : string = '';
  @Input() set Name(value: string){
    this.name = value;
  }
  public get Name(): string{
    return this.name;
  }

  private cows : CowDto[] = [];
  @Input() set Cows(value: CowDto[]){
    this.cows = [...value]
    this.filteredCows = [...this.cows];
  }   
  public get Cows(): CowDto[] {
    return this.cows;
  }

  public filteredCows : CowDto[] = [];

  applyFilterGlobal(event: any) {
    return event.target.value;
  }

  clear(table: Table) {
        table.clear();
    }

  public showAll(): void{
    this.filteredCows = [...this.Cows];
  }
  public filterByGroup(group: GroupDto){
    this.filteredCows = [...this.Cows.filter(c => c.groupId === group.id)];
  }
  public filterByPen(pen: PenDto){
    this.filteredCows = [...this.Cows.filter(c => c.penId === pen.id)];
  }
}
