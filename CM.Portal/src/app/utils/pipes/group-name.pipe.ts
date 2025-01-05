import { inject, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';
import { CattleState } from '../../state/cattle/cattle.store';

@Pipe({
  name: 'groupName',
  standalone: false
})
export class GroupNamePipe implements PipeTransform {
  protected store = inject(Store);

  transform(value:number | null | undefined): string | undefined {
    if(value == null){
      return "";
    }
    let groupDict: Map<number, string> = this.store.selectSnapshot(CattleState.groupDict);
    let result = groupDict.get(value); 
    return result;
  }
}