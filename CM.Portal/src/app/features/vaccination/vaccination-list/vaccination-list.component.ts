import { Component, Input } from '@angular/core';
import { VaccinationDto } from '../../../api/models';

@Component({
  selector: 'app-vaccination-list',
  standalone: false,
  
  templateUrl: './vaccination-list.component.html',
  styleUrl: './vaccination-list.component.scss'
})
export class VaccinationListComponent {
  @Input() Vaccinations : VaccinationDto[] = []
}
