import { Action, Selector, State, StateContext } from "@ngxs/store";
import { MilkingStateModel } from "./milking.state";
import { Injectable } from "@angular/core";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { MilkingDto, MilkingInputsDto, MilkProductionDto } from "../../api/models";
import { MilkingService, MilkProductionService } from "../../api/services";
import { MilkingInputs, Milkings, MilkProductions } from "./milking.actions";

@State<MilkingStateModel>({
    name:'milking',
    defaults:{
        Milkings: [],
        MilkProductions: []
    }
})

@Injectable()
export class MilkingState{
    constructor(private milkingService: MilkingService, private milkProductionService: MilkProductionService){}

    @Selector()
    static milkings(milkingState:MilkingStateModel){
        return milkingState.Milkings;
    }

    @Selector()
    static milkProductions(milkingState:MilkingStateModel){
        return milkingState.MilkProductions;
    }
    
    @Selector()
    static milkingInputs(milkingState:MilkingStateModel){
        return milkingState.MilkingInputs;
    }

    /// Milkings Actions
    @Action(Milkings.GetAll)
    getAllMilkings(ctx: StateContext<MilkingStateModel>){
        return this.milkingService.apiMilkingGet().pipe(tap(milkings=>{
            ctx.patchState({Milkings : milkings});
            })
        );
    }

    @Action(Milkings.Create)
    createMilking(ctx: StateContext<MilkingStateModel>, action: Milkings.Create){
        return this.milkingService.apiMilkingPost(action.payload)
        .pipe(
            tap(newMilking=>{
                ctx.setState(patch<MilkingStateModel>({Milkings: append<MilkingDto>([newMilking])}))
            })
        );
    }

    @Action(Milkings.Update)
    updateMilking(ctx: StateContext<MilkingStateModel>, action:Milkings.Update){
        return this.milkingService.apiMilkingPut(action.payload)
        .pipe(
            tap(updatedMilking=>{
                ctx.setState(patch<MilkingStateModel>({Milkings: updateItem<MilkingDto>(c => c.id === updatedMilking.id, updatedMilking)}))
            })
        );
    }

    @Action(Milkings.Delete)
    deleteMilking(ctx: StateContext<MilkingStateModel>, action: Milkings.Delete){
        return this.milkingService.apiMilkingDelete({id : action.id}).
        pipe(
            tap(deleted =>{
                ctx.setState(patch<MilkingStateModel>({Milkings : removeItem<MilkingDto>(c => c.id === action.id)}))
            })
        );
    }
    
    /// MilkProductions Actions
    @Action(MilkProductions.GetAll)
    getAllMilkProductions(ctx: StateContext<MilkingStateModel>){
        return this.milkProductionService.apiMilkProductionGet()
        .pipe(tap(milkProductions=>{
            ctx.patchState({MilkProductions : milkProductions})
            })
        );
    }

    @Action(MilkProductions.Create)
    createMilkProduction(ctx: StateContext<MilkingStateModel>, action: MilkProductions.Create){
        return this.milkProductionService.apiMilkProductionPost(action.payload)
        .pipe(
            tap(newMilkProduction=>{
                ctx.setState(patch<MilkingStateModel>({MilkProductions: append<MilkProductionDto>([newMilkProduction])}))
            })
        );
    }

    @Action(MilkProductions.Update)
    updateMilkProduction(ctx: StateContext<MilkingStateModel>, action:MilkProductions.Update){
        return this.milkProductionService.apiMilkProductionPut(action.payload)
        .pipe(
            tap(updatedMilkProduction=>{
                ctx.setState(patch<MilkingStateModel>({MilkProductions: updateItem<MilkProductionDto>(c => c.id === updatedMilkProduction.id, updatedMilkProduction)}))
            })
        );
    }

    @Action(MilkProductions.Delete)
    deleteMilkProduction(ctx: StateContext<MilkingStateModel>, action: MilkProductions.Delete){
        return this.milkProductionService.apiMilkProductionDelete({id : action.id})
        .pipe(
            tap(deleted =>{
                ctx.setState(patch<MilkingStateModel>({MilkProductions : removeItem<MilkProductionDto>(c => c.id === action.id)}))
            })
        );
    }

    //MilkingInputs Actions
    @Action(MilkingInputs.Get)
    getMilkingInputs(ctx: StateContext<MilkingStateModel>, action: MilkingInputs.Get){
        return this.milkingService.apiMilkingMilkingInputsDateGet({date: action.date})
        .pipe(tap(milkingInputs=>{
            ctx.patchState({MilkingInputs : milkingInputs})
            })
        );
    }

    @Action(MilkingInputs.Update)
    updateMilkingInputs(ctx: StateContext<MilkingStateModel>, action:MilkingInputs.Update){
        debugger;
        return this.milkingService.apiMilkingMilkingInputsPost({body: action.payload})
        .pipe(
            tap(milkingInputs=>{
                ctx.patchState({MilkingInputs : milkingInputs})
            })
        );
    }
}