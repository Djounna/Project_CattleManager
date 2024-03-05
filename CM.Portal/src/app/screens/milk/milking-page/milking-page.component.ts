import { Component, QueryList, ViewChildren } from '@angular/core';
import { CowDto, MilkingInputDto, MilkingInputsDto } from '../../../api/models';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { MilkingInputs } from '../../../state/milking/milking.actions';
import { MilkingState } from '../../../state/milking/milking.store';
import moment from 'moment';
import { MilkingInputComponent } from '../../../features/milking/milking-input/milking-input.component';

@Component({
  selector: 'app-milking-page',
  templateUrl: './milking-page.component.html',
  styleUrl: './milking-page.component.scss'
})
export class MilkingPageComponent extends BaseComponent {

  MilkingDatas : MilkingData[] = [];
  Date!: Date ;

  @ViewChildren(MilkingInputComponent)
  MilkingDatasRef!: QueryList<MilkingInputComponent>;

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = [];
  @Select(MilkingState.milkingInputs) MilkingInputs$! : Observable<MilkingInputsDto>
  public MilkingInputs!: MilkingInputsDto;

  public Data$ = combineLatest([this.Cows$, this.MilkingInputs$])

  override ngOnInit(): void {
    this.Date = new Date();
    let ddate : string = moment(this.Date).format('YYYY-MM-DD');

    this.displayLoader = true;

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c,m]) =>{
        this.Cows = c.filter(c => c.milkCow === true);
        this.MilkingInputs = m;
        this.Cows.forEach(c =>{
          let input = this.MilkingInputs.milkingInputs?.find(m => m.cowId === c.id);
          if(!!input){
            this.MilkingDatas.push({
              Cow : c,
              Volume : input.volume as number,
              Done : input.done as boolean,
            })
          }
          else{
            this.MilkingDatas.push({
              Cow : c,
              Volume : 0,
              Done : false,
            })
          }
        })
      })).subscribe({
          next:(res) => this.displayLoader = false,
          error:(err) => this.displayLoader = false
        });

    this.store.dispatch(new MilkingInputs.Get(ddate))
    this.store.dispatch(new Cows.GetAll());
  }

  Save():void{
    let newInputs : MilkingInputsDto = {
      date: this.MilkingInputs.date,
      milkingInputs : []
    };
    this.MilkingDatasRef.forEach(m => {
      let newInput: MilkingInputDto = {
        cowId: m.MilkingData.Cow.id,
        done: true,
        volume: m.formGroup.controls['volume'].value
      }
      newInputs.milkingInputs?.push(newInput);
    })

    this.store.dispatch(new MilkingInputs.Update(newInputs));
  }
}

export interface MilkingData{
  Cow: CowDto,
  Volume : number,
  Done : boolean,
}
