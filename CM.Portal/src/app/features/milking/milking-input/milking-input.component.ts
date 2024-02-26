import { Component, Input, inject } from '@angular/core';
import { CowDto } from '../../../api/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-milking-input',
  templateUrl: './milking-input.component.html',
  styleUrl: './milking-input.component.scss'
})
export class MilkingInputComponent {
  formBuilder = inject(FormBuilder);

  @Input() Cow!: CowDto

  public Volume: number = 0;
  formGroup : FormGroup = this.formBuilder.group({
    volume:['']
    }
  )



}
