
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { CowService, GroupService, JobService } from "../../api/services";
import { JobDto } from "../../api/models";
import { Jobs } from "./work.actions";

export interface WorkStateModel{
    Jobs: JobDto[],
}
@State<WorkStateModel>({
    name:'work',
    defaults:{
        Jobs : [],
    }
})

@Injectable()
export class WorkState{
    constructor(private jobService: JobService){}

    @Selector()
    static cows(cattleState:WorkStateModel){
        return cattleState.Jobs;
    }


    /// Jobs Actions
    @Action(Jobs.GetAll)
    getAllJobs(ctx: StateContext<WorkStateModel>){
        return this.jobService.apiJobGet().pipe(tap(jobs=>{
            debugger;
            ctx.patchState({Jobs : jobs});
            })
        );
    }

    @Action(Jobs.Create)
    createJob(ctx: StateContext<WorkStateModel>, action: Jobs.Create){
        return this.jobService.apiJobPost(action.payload)
        .pipe(
            tap(newJob=>{
                ctx.setState(patch<WorkStateModel>({Jobs: append<JobDto>([newJob])}))
            })
        );
    }

    @Action(Jobs.Update)
    updateJob(ctx: StateContext<WorkStateModel>, action:Jobs.Update){
        return this.jobService.apiJobPut(action.payload)
        .pipe(
            tap(updatedJob=>{
                ctx.setState(patch<WorkStateModel>({Jobs: updateItem<JobDto>(c => c.id === updatedJob.id, updatedJob)}))
            })
        );
    }

    @Action(Jobs.Delete)
    deleteJob(ctx: StateContext<WorkStateModel>, action: Jobs.Delete){
        return this.jobService.apiJobDelete({id : action.id}).
        pipe(
            tap(deleted =>{
                ctx.setState(patch<WorkStateModel>({Jobs : removeItem<JobDto>(c => c.id === action.id)}))
            })
        );
    }
}