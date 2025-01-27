import { inject, Pipe, PipeTransform } from "@angular/core";
import { Store } from "@ngxs/store";
import { CattleState } from "../../state/cattle/cattle.store";

@Pipe({
    name: 'cowIdentifier',
    standalone: false
})
export class CowIdentifierPipe implements PipeTransform{
    protected store = inject(Store);

    transform(value: number | null | undefined): string | undefined {
        if (value == null){
            return "";
        }
        let cowIdentifierDict: Map<number, string> = this.store.selectSnapshot(CattleState.cowIdentifierDict)
        let result = cowIdentifierDict.get(value); 
        return result;
    }
}