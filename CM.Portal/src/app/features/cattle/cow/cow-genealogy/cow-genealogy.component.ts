import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CowDetailsDto } from '../../../../api/models';

@Component({
  selector: 'app-cow-genealogy',
  standalone: false,
  templateUrl: './cow-genealogy.component.html',
  styleUrl: './cow-genealogy.component.scss'
})
export class CowGenealogyComponent{
  public data : TreeNode[] = [];
  private cowDetails!: CowDetailsDto;
  get CowDetails(): CowDetailsDto{
    return this.cowDetails;
  }
  @Input() set CowDetails(value:CowDetailsDto){
    this.cowDetails = value;
    this.data = [
      {
        label: `${this.CowDetails.identifier} - ${this.CowDetails.name}` ,
        expanded : !!this.CowDetails.genealogy?.father || !!this.CowDetails.genealogy?.mother,
        data: this.CowDetails?.imgLink,
        children:
        [
          {
            label: `${this.CowDetails.genealogy?.father?.cow?.identifier} - ${this.CowDetails.genealogy?.father?.cow?.name}` ,
            expanded: !!this.CowDetails.genealogy?.father?.father || !!this.CowDetails.genealogy?.father?.mother,
            data:this.CowDetails.genealogy?.father?.cow?.imgLink,
            children: 
            [
              {
                label: `${this.CowDetails.genealogy?.father?.father?.identifier} - ${this.CowDetails.genealogy?.father?.father?.name}` ,
                data: this.CowDetails.genealogy?.father?.father?.imgLink,
              },
              {
                label: `${this.CowDetails.genealogy?.father?.mother?.identifier} - ${this.CowDetails.genealogy?.father?.mother?.name}` ,
                data: this.CowDetails.genealogy?.father?.mother?.imgLink,
              }
            ]
          },
          {
            label: `${this.CowDetails.genealogy?.mother?.cow?.identifier} - ${this.CowDetails.genealogy?.mother?.cow?.name}` ,
            expanded: !!this.CowDetails.genealogy?.mother?.father || !!this.CowDetails.genealogy?.mother?.mother,
            data: this.CowDetails.genealogy?.mother?.cow?.imgLink,
            children: 
            [
              {
                label: `${this.CowDetails.genealogy?.mother?.father?.identifier} - ${this.CowDetails.genealogy?.mother?.father?.name}` ,
                data: this.CowDetails.genealogy?.mother?.father?.imgLink,
              },
              {
                label: `${this.CowDetails.genealogy?.mother?.mother?.identifier} - ${this.CowDetails.genealogy?.mother?.mother?.name}` ,
                data: this.CowDetails.genealogy?.mother?.mother?.imgLink,
              }
            ]
          },
        ]
      }
    ]
  }
}