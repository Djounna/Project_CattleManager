import { Component, Input, inject } from '@angular/core';
import { CowDto, MilkingInputDto } from '../../../api/models';
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

  public formGroup! : FormGroup;

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      volume:['']
    });
  }
}
