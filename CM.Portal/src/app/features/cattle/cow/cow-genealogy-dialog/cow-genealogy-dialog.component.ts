import { Component, Input } from '@angular/core';
import { CowGenealogyDto } from '../../../../api/models';

@Component({
  selector: 'app-cow-genealogy-dialog',
  standalone: false,
  
  templateUrl: './cow-genealogy-dialog.component.html',
  styleUrl: './cow-genealogy-dialog.component.scss'
})
export class CowGenealogyDialogComponent {

  @Input() CowGenealogy! : CowGenealogyDto;
}
