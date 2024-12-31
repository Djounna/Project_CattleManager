import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MilkingData } from '../../../screens/milk/milking-page/milking-page.component';

@Component({
  selector: 'app-milking-input',
  templateUrl: './milking-input.component.html',
  styleUrl: './milking-input.component.scss'
})
export class MilkingInputComponent {
  formBuilder = inject(FormBuilder);

  @Input() MilkingData! : MilkingData;
  @Output() onSave :EventEmitter<MilkingData> = new EventEmitter<MilkingData>;

  public formGroup! : FormGroup;

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      volume:['']
    });
  }

  Save(): void{
    if(this.formGroup.controls['volume'].value <= 0 || this.MilkingData == null){
      return;
    }
    let newVolume = this.formGroup.controls['volume'].value;
    let newData : MilkingData = {
      Cow: this.MilkingData?.Cow,
      Volume: newVolume,
      Done: true
    }
    this.onSave.emit(newData);
  }
}
