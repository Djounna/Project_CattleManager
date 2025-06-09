import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CowGenealogyDto } from '../../../../api/models';

@Component({
  selector: 'app-cow-genealogy',
  standalone: false,
  templateUrl: './cow-genealogy.component.html',
  styleUrl: './cow-genealogy.component.scss'
})
export class CowGenealogyComponent{
  public data : TreeNode[] = [];
  private genealogy!: CowGenealogyDto;
  @Input() set CowGenealogy(value:CowGenealogyDto){
    this.genealogy = value;
    this.data = [
      {
        label: `${this.genealogy?.cow?.name ?? 'unknown'}` ,
        expanded : !!this.genealogy?.father || !!this.genealogy?.mother,
        type: 'cow',
        data:{
          identifier: this.genealogy?.cow?.identifier ?? 'unknown', 
          img : this.genealogy?.cow?.imgLink,
        } ,
        children:
        [
          {
            label: `${this.genealogy?.father?.cow?.name ?? 'unknown'}` ,
            expanded: !!this.genealogy?.father?.father || !!this.genealogy?.father?.mother,
            type: 'cow',
            data: {
              identifier:this.genealogy?.father?.cow?.identifier ?? 'unknown' ,
              img: this.genealogy?.father?.cow?.imgLink,
            },
            children: 
            [
              {
                label: `${this.genealogy?.father?.father?.name ?? 'unknown'}` ,
                type: 'cow',
                data: {
                  identifier: this.genealogy?.father?.father?.identifier ?? 'unknown' ,
                  img: this.genealogy?.father?.father?.imgLink,
                }
              },
              {
                label: `${this.genealogy?.father?.mother?.name ?? 'unknown'}`,
                type: 'cow',
                data:{
                  identifier: this.genealogy?.father?.mother?.identifier ?? 'unknown',
                  img: this.genealogy?.father?.mother?.imgLink,
                } 
              }
            ]
          },
          {
            label: `${this.genealogy?.mother?.cow?.name ?? 'unknown'}` ,
            expanded: !!this.genealogy?.mother?.father || !!this.genealogy?.mother?.mother,
            type: 'cow',
            data: {
              identifier: this.genealogy?.mother?.cow?.identifier ?? 'unknown',
              img: this.genealogy?.mother?.cow?.imgLink,
            },
            children: 
            [
              {
                label: `${this.genealogy?.mother?.father?.name ?? 'unknown'}`,
                type: 'cow',
                data: {
                  identifier:this.genealogy?.mother?.father?.identifier ?? 'unknown',
                  img:this.genealogy?.mother?.father?.imgLink,
                } 
              },
              {
                label: `${this.genealogy?.mother?.mother?.name ?? 'unknown'}` ,
                type: 'cow',
                data: {
                  identifier: this.genealogy?.mother?.mother?.identifier ?? 'unknown',
                  img: this.genealogy?.mother?.mother?.imgLink,
                }
              }
            ]
          },
        ]
      }
    ]
  }
}