import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CowDto } from '../../../api/models';


@Component({
  selector: 'app-cows-list-view',
  templateUrl: './cows-list-view.component.html',
  styleUrl: './cows-list-view.component.css'
})
export class CowsListViewComponent {
  @ViewChild('dt') dt: any;
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

  public filterByGroup(id: number){
    this.filteredCows = [...this.Cows.filter(c => c.groupId === id)];
  }
}
