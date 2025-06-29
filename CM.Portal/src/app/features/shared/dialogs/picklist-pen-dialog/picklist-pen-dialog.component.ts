import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CowDto, PenDto } from '../../../../api/models';
import { PicklistToolComponent } from '../../picklist-tool/picklist-tool.component';

@Component({
  selector: 'app-picklist-pen-dialog',
  standalone: false,
  templateUrl: './picklist-pen-dialog.component.html',
  styleUrl: './picklist-pen-dialog.component.scss'
})
export class PicklistPenDialogComponent {
  @ViewChild('tool') tool! : PicklistToolComponent 

  constructor(
    public dialogRef: MatDialogRef<PicklistPenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Cows:CowDto[], Pens:PenDto[], SourceId:number}
  ){}

  sourceId : number | undefined 
  targetId : number | undefined;
  public set SelectedSourcePen(value: PenDto){
    this.sourceId = value.id;
  }
  public set SelectedTargetPen(value: PenDto){
    this.targetId = value.id;
  }

  ngOnInit() : void{
    this.SelectedSourcePen = this.data.Pens.find(g => g.id === this.data.SourceId)!;
  }

  Close(saved: boolean): void{
    this.dialogRef.close(saved);
  }

  Save(): void{
    this.tool.Save();
  }
}
