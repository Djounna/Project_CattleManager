import { Component, QueryList, ViewChildren } from '@angular/core';
import { CowDto, MilkingDto, MilkingInputDto, MilkingInputsDto } from '../../../api/models';
import { Select } from '@ngxs/store';
import { Observable, combineLatest, takeUntil, tap } from 'rxjs';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows } from '../../../state/cattle/cattle.actions';
import { MilkingInput, MilkingInputs, Milkings } from '../../../state/milking/milking.actions';
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
  Date!: Date;
  SelectedDate!: string;

  @ViewChildren(MilkingInputComponent)
  MilkingDatasRef!: QueryList<MilkingInputComponent>;

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = [];
  @Select(MilkingState.milkingInputs) MilkingInputs$! : Observable<MilkingInputsDto>
  public MilkingInputs!: MilkingInputsDto;

  public Data$ = combineLatest([this.Cows$, this.MilkingInputs$]);

  override ngOnInit(): void {
    this.Date = new Date();
    let ddate : string = moment(this.Date).format('YYYY-MM-DD');
    this.SelectedDate = ddate;

    this.displayLoader = true;

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c,m]) =>{
        this.Cows = c.filter(c => c.milkCow === true);
        this.MilkingInputs = m;
        this.refreshDatas();
      })).subscribe({
          next:(res) => this.displayLoader = false,
          error:(err) => this.displayLoader = false
        });

    this.store.dispatch(new MilkingInputs.Get(ddate))
    this.store.dispatch(new Cows.GetAll());
  }

  private refreshDatas(): void{
        this.MilkingDatas.splice(0,this.MilkingDatas.length);
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
  }

  SelectDate(): void{
    let ddate : string = moment(this.Date).format('YYYY-MM-DD');
    this.SelectedDate = ddate;
    this.store.dispatch(new MilkingInputs.Get(ddate))
  }

  SaveOne(milkingData: MilkingData): void{
    let dto: MilkingDto = {
      cowId : milkingData?.Cow?.id,
      volume : milkingData.Volume,
      date : this.MilkingInputs.date
    };
    this.store.dispatch(new MilkingInput.Update(dto))
    .subscribe({
      next:(res) => this.toastSuccess('Les données de traite ont été enregistrées avec succès'),
      error:(res) => this.toastError('Une erreur s\'est produite lors de l\'enregistrement des données de traite')
    });
  }

  SaveAll():void{
    let newInputs : MilkingInputsDto = {
      date: this.MilkingInputs.date,
      milkingInputs : []
    };
    this.MilkingDatasRef.forEach(m => {
      if(m.formGroup.controls['volume'].value > 0){
          let newInput: MilkingInputDto = {
            cowId: m.MilkingData.Cow.id,
            volume: m.formGroup.controls['volume'].value,
            done: true
          }
          newInputs.milkingInputs?.push(newInput);
        }
    })

    this.store.dispatch(new MilkingInputs.Update(newInputs))
    .subscribe({
      next:(res) => this.toastSuccess('Les données de traite ont été enregistrées avec succès'),
      error:(res) => this.toastError('Une erreur s\'est produite lors de l\'enregistrement des données de traite')
    });
  }
}

export interface MilkingData{
  Cow: CowDto,
  Volume : number,
  Done : boolean,
}
