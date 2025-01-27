import { inject, Pipe, PipeTransform } from "@angular/core";
import { Store } from "@ngxs/store";
import { CattleState } from "../../state/cattle/cattle.store";

@Pipe({
    name: 'cowName',
    standalone: false
})
export class CowNamePipe implements PipeTransform{
    protected store = inject(Store);

    transform(value: number | null | undefined): string | undefined {
        if (value == null){
            return "";
        }
        let cowNameDict: Map<number, string> = this.store.selectSnapshot(CattleState.cowNameDict)
        let result = cowNameDict.get(value); 
        return result;
    }
}