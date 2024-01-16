import { Action, Selector, State } from "@ngxs/store";
import { MilkingStateModel } from "./milking.state";
import { Injectable } from "@angular/core";

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
    static milkings(cattleState:MilkingStateModel){
        return cattleState.Milkings;
    }

    @Selector()
    static milkProductions(cattleState:MilkingStateModel){
        return cattleState.MilkProductions;
    }

    /// Milkings Actions
    @Action(Milkings.GetAll)
    getAllMilkings(ctx: StateContext<CattleStateModel>){
        return this.milkingService.apiMilkingGet().pipe(tap(milkings=>{
            ctx.patchState({Milkings : milkings});
            })
        );
    }

    @Action(Milkings.Create)
    createMilking(ctx: StateContext<CattleStateModel>, action: Milkings.Create){
        return this.milkingService.apiMilkingPost(action.payload)
        .pipe(
            tap(newMilking=>{
                ctx.setState(patch<CattleStateModel>({Milkings: append<MilkingDto>([newMilking])}))
            })
        );
    }

    @Action(Milkings.Update)
    updateMilking(ctx: StateContext<CattleStateModel>, action:Milkings.Update){
        return this.milkingService.apiMilkingPut(action.payload)
        .pipe(
            tap(updatedMilking=>{
                ctx.setState(patch<CattleStateModel>({Milkings: updateItem<MilkingDto>(c => c.id === updatedMilking.id, updatedMilking)}))
            })
        );
    }

    @Action(Milkings.Delete)
    deleteMilking(ctx: StateContext<CattleStateModel>, action: Milkings.Delete){
        return this.milkingService.apiMilkingDelete({id : action.id}).
        pipe(
            tap(deleted =>{
                ctx.setState(patch<CattleStateModel>({Milkings : removeItem<MilkingDto>(c => c.id === action.id)}))
            })
        );
    }
    
    /// MilkProductions Actions
    @Action(MilkProductions.GetAll)
    getAllMilkProductions(ctx: StateContext<CattleStateModel>){
        return this.milkProductionService.apiMilkProductionGet()
        .pipe(tap(milkProductions=>{
            ctx.patchState({MilkProductions : milkProductions})
            })
        );
    }

    @Action(MilkProductions.Create)
    createMilkProduction(ctx: StateContext<CattleStateModel>, action: MilkProductions.Create){
        return this.milkProductionService.apiMilkProductionPost(action.payload)
        .pipe(
            tap(newMilkProduction=>{
                ctx.setState(patch<CattleStateModel>({MilkProductions: append<MilkProductionDto>([newMilkProduction])}))
            })
        );
    }

    @Action(MilkProductions.Update)
    updateMilkProduction(ctx: StateContext<CattleStateModel>, action:MilkProductions.Update){
        return this.milkProductionService.apiMilkProductionPut(action.payload)
        .pipe(
            tap(updatedMilkProduction=>{
                ctx.setState(patch<CattleStateModel>({MilkProductions: updateItem<MilkProductionDto>(c => c.id === updatedMilkProduction.id, updatedMilkProduction)}))
            })
        );
    }

    @Action(MilkProductions.Delete)
    deleteMilkProduction(ctx: StateContext<CattleStateModel>, action: MilkProductions.Delete){
        return this.milkProductionService.apiMilkProductionDelete({id : action.id})
        .pipe(
            tap(deleted =>{
                ctx.setState(patch<CattleStateModel>({MilkProductions : removeItem<MilkProductionDto>(c => c.id === action.id)}))
            })
        );
    }