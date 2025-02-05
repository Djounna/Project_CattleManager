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
        label: `${this.CowDetails.name}` ,
        expanded : !!this.CowDetails.genealogy?.father || !!this.CowDetails.genealogy?.mother,
        type: 'cow',
        data:{
          identifier: this.CowDetails.identifier, 
          img : this.CowDetails?.imgLink,
        } ,
        children:
        [
          {
            label: `${this.CowDetails.genealogy?.father?.cow?.name}` ,
            expanded: !!this.CowDetails.genealogy?.father?.father || !!this.CowDetails.genealogy?.father?.mother,
            type: 'cow',
            data: {
              identifier:this.CowDetails.genealogy?.father?.cow?.identifier ,
              img: this.CowDetails.genealogy?.father?.cow?.imgLink,
            },
            children: 
            [
              {
                label: `${this.CowDetails.genealogy?.father?.father?.name}` ,
                type: 'cow',
                data: {
                  identifier: this.CowDetails.genealogy?.father?.father?.identifier ,
                  img: this.CowDetails.genealogy?.father?.father?.imgLink,
                }
              },
              {
                label: `${this.CowDetails.genealogy?.father?.mother?.name}`,
                type: 'cow',
                data:{
                  identifier: this.CowDetails.genealogy?.father?.mother?.identifier,
                  img: this.CowDetails.genealogy?.father?.mother?.imgLink,
                } 
              }
            ]
          },
          {
            label: `${this.CowDetails.genealogy?.mother?.cow?.name}` ,
            expanded: !!this.CowDetails.genealogy?.mother?.father || !!this.CowDetails.genealogy?.mother?.mother,
            type: 'cow',
            data: {
              identifier: this.CowDetails.genealogy?.mother?.cow?.identifier,
              img: this.CowDetails.genealogy?.mother?.cow?.imgLink,
            },
            children: 
            [
              {
                label: `${this.CowDetails.genealogy?.mother?.father?.name}`,
                type: 'cow',
                data: {
                  identifier:this.CowDetails.genealogy?.mother?.father?.identifier,
                  img:this.CowDetails.genealogy?.mother?.father?.imgLink,
                } 
              },
              {
                label: `${this.CowDetails.genealogy?.mother?.mother?.name}` ,
                type: 'cow',
                data: {
                  identifier: this.CowDetails.genealogy?.mother?.mother?.identifier,
                  img: this.CowDetails.genealogy?.mother?.mother?.imgLink,
                }
              }
            ]
          },
        ]
      }
    ]
  }
}