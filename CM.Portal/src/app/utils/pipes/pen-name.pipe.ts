import { inject, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';
import { InfrastructureState } from '../../state/infrastructure/infrastructure.store';

@Pipe({
  name: 'penName',
  standalone: false
})
export class PenNamePipe implements PipeTransform {
  protected store = inject(Store);

  transform(value:number | null | undefined): string | undefined {
    if(value == null){
      return "";
    }
    let penDict: Map<number, string> = this.store.selectSnapshot(InfrastructureState.penDict);
    let result = penDict.get(value); 
    return result;
  }
}
