import { Component, Input, OnInit } from '@angular/core';
import { GestationDto } from '../../../api/models';

@Component({
  selector: 'app-gestations-board',
  standalone: false,
  
  templateUrl: './gestations-board.component.html',
  styleUrl: './gestations-board.component.scss'
})
export class GestationsBoardComponent implements OnInit{
  @Input() Gestations: GestationDto[] = [];
  ngOnInit(){
    this.Gestations.sort((a, b) => new Date(a.calvingDate as string).getDate() - new Date(b.calvingDate as string).getDate());
  }
}
