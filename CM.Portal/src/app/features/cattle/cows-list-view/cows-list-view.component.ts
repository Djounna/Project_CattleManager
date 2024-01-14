import { Component, Input } from '@angular/core';
import { Table } from 'primeng/table';
import { CowDto } from '../../../api/models';


@Component({
  selector: 'app-cows-list-view',
  templateUrl: './cows-list-view.component.html',
  styleUrl: './cows-list-view.component.css'
})
export class CowsListViewComponent {
  @Input() Cows : CowDto[] = []

  applyFilterGlobal(event: any) {
    return event.target.value;
  }

  clear(table: Table) {
        table.clear();
    }
}
