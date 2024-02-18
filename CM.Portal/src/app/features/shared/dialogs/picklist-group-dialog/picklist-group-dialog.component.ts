import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CowDto, GroupDto, PenDto } from '../../../../api/models';
import { PicklistToolComponent } from '../../picklist-tool/picklist-tool.component';

@Component({
  selector: 'app-picklist-group-dialog',
  templateUrl: './picklist-group-dialog.component.html',
  styleUrl: './picklist-group-dialog.component.css'
})
export class PicklistGroupDialogComponent {

  @ViewChild('tool') tool! : PicklistToolComponent 

  constructor(
    public dialogRef: MatDialogRef<PicklistGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Cows:CowDto[], Groups:GroupDto[], SourceId:number}
  ){}


  sourceId : number | undefined 
  targetId : number | undefined;
  public set SelectedSourceGroup(value: GroupDto){
    this.sourceId = value.id;
  }
  public set SelectedTargetGroup(value: GroupDto){
    this.targetId = value.id;
  }

  ngOnInit() : void{
    this.SelectedSourceGroup = this.data.Groups.find(g => g.id === this.data.SourceId)!;
  }

  Close(): void{
    this.dialogRef.close();
  }

  Save(): void{
    this.tool.Save();
  }
}
