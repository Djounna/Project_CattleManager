import { Component, Input } from '@angular/core';
import { PenDto } from '../../../api/models';

@Component({
  selector: 'app-pen-datagrid',
  templateUrl: './pen-datagrid.component.html',
  styleUrl: './pen-datagrid.component.css'
})
export class PenDatagridComponent {
  @Input() Pens: PenDto[] = []
}
