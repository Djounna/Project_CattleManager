import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { append, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { CowDto, GroupDto } from "../../api/models";
import { CowService, GroupService } from "../../api/services";
import { Cows } from "./cattle.actions";

export interface CattleStateModel{
    Cows : CowDto[],
    Groups : GroupDto[],
}

@State<CattleStateModel>({
    name:'cattle',
    defaults:{
        Cows : [],
        Groups: [] ,
    }
})
@Injectable()
export class CattleState{
    constructor(private cowService: CowService, groupService: GroupService){}

    @Action(Cows.GetAll)
    getAllCows(ctx: StateContext<CattleStateModel>){
        return this.cowService.apiCowGet().pipe(tap(cows=>{
            ctx.patchState({Cows : cows})
            })
        );
    }

    @Action(Cows.Create)
    createCow(ctx: StateContext<CattleStateModel>, action: Cows.Create){
        return this.cowService.apiCowPost(action.payload)
        .pipe(
            tap(newCow=>{
                ctx.setState(patch<CattleStateModel>({Cows: append<CowDto>([newCow])}))
            })
        );
    }

    @Action(Cows.Update)
    updateCow(ctx: StateContext<CattleStateModel>, action:Cows.Update){
        return this.cowService.apiCowPut(action.payload)
        .pipe(
            tap(updatedCow=>{
                ctx.setState(patch<CattleStateModel>({Cows: updateItem<CowDto>(c => c.id === updatedCow.id, updatedCow)}))
            })
        );
    }

    @Action(Cows.Delete)
    deleteCow(ctx: StateContext<CattleStateModel>, action: Cows.Delete){
        return this.cowService.apiCowDelete({id : action.id}).
        pipe(
            tap(deleted =>{
                ctx.setState(patch<CattleStateModel>({Cows : removeItem<CowDto>(c => c.id === action.id)}))
            })
        );
    }
}