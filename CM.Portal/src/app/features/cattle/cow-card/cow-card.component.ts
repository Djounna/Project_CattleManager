import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CowDto } from '../../../api/models';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cow-card',
    templateUrl: './cow-card.component.html',
    styleUrl: './cow-card.component.scss',
    standalone: false
})
export class CowCardComponent implements OnInit {
  private router = inject(Router);
  @Input('Cow') Cow! : CowDto;
  @Output() onUpdate: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddAlert: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddIntervention: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddVaccination: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddGestation: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddCondition: EventEmitter<CowDto> = new EventEmitter<CowDto>();
  @Output() onAddTreatment: EventEmitter<CowDto> = new EventEmitter<CowDto>();

  public menuItems:MenuItem[] | undefined;

  ngOnInit(): void{
    this.menuItems = [ 
    {
      label:'Options',
      items:[
        {
          label: 'Intervention',
          icon: 'pi pi-plus-circle',
          command: () => {this.onAddIntervention.emit(this.Cow)}
        },
        {
          label: 'Vaccination',
          icon: 'pi pi-plus-circle',
          command: () => {this.onAddVaccination.emit(this.Cow)}
        },
        {
          label: 'Affection',
          icon: 'pi pi-plus-circle',
          command: () => {this.onAddCondition.emit(this.Cow)}
        },
        {
          label: 'Traitement',
          icon: 'pi pi-plus-circle',
          command: () => {this.onAddTreatment.emit(this.Cow)}
        },
      ]
    }]

    if(this.Cow.gender === 'F'){
      this.menuItems.push(
        {
          label:'Options',
          items:[
            {
              label: 'Gestation',
              icon: 'pi pi-plus-circle',
              command: () => {this.onAddGestation.emit(this.Cow)}
            }
          ]
        }
      );
    }
  }

  public UpdateCow(cow: CowDto){
    this.onUpdate.emit(cow);
  }

  public AddAlert(cow: CowDto){
    this.onAddAlert.emit(cow);
  }

  public navigateToCowDetails(cow: CowDto){
    this.router.navigate(['/cowDetails', cow.id]);
  }
}
