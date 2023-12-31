import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CowDto } from '../../../api/models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cows-list-view',
  standalone: true,
  imports: [ CommonModule, TableModule, TabViewModule, CardModule],
  templateUrl: './cows-list-view.component.html',
  styleUrl: './cows-list-view.component.css'
})
export class CowsListViewComponent {
  @Input() Cows : CowDto[] = []

}
