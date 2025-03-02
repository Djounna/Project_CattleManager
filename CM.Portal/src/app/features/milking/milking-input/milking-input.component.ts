import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MilkingData } from '../../../screens/milk/milking-page/milking-page.component';

@Component({
    selector: 'app-milking-input',
    templateUrl: './milking-input.component.html',
    styleUrl: './milking-input.component.scss',
    standalone: false
})
export class MilkingInputComponent {
  formBuilder = inject(FormBuilder);

  @Input() MilkingData! : MilkingData;
  @Output() onSave :EventEmitter<MilkingData> = new EventEmitter<MilkingData>;
  @Output() onAnnul :EventEmitter<MilkingData> = new EventEmitter<MilkingData>;

  public volume! : number;

  ngOnInit(){
      this.volume = this.MilkingData.Volume;
  }

  Save(): void{
    if(this.volume <= 0 || this.MilkingData == null){
      return;
    }
    let newVolume = this.volume;
    let newData : MilkingData = {
      Cow: this.MilkingData?.Cow,
      Volume: newVolume,
      Done: true
    }
    this.onSave.emit(newData);
  }

  Annul(): void{
    let newData : MilkingData = {
      Cow: this.MilkingData?.Cow,
      Volume: 0,
      Done: true
    }
    this.onAnnul.emit(newData);
  }
}
