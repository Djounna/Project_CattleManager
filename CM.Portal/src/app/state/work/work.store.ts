import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { JobDto } from "../../api/models";
import { JobService } from "../../api/services";
import { Jobs } from "./work.actions";
import { WorkStateModel } from "./work.state";

@State<WorkStateModel>({
    name:'work',
    defaults:{
        Jobs : [],
        Workers : []
    }
})

@Injectable()
export class WorkState{
    constructor(private jobService: JobService){}

    @Selector()
    static jobs(cattleState:WorkStateModel){
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