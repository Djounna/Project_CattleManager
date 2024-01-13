import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { JobDto, UserDto } from "../../api/models";
import { JobService, WorkerService } from "../../api/services";
import { Jobs, Workers } from "./work.actions";
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
    constructor(private jobService: JobService, private workerService: WorkerService){}

    @Selector()
    static jobs(cattleState:WorkStateModel){
        return cattleState.Jobs;
    }

    @Selector()
    static workers(cattleState:WorkStateModel){
        return cattleState.Workers;
    }


    /// Jobs Actions
    @Action(Jobs.GetAll)
    getAllJobs(ctx: StateContext<WorkStateModel>){
        return this.jobService.apiJobGet().pipe(tap(jobs=>{
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

    /// Workers Actions
    @Action(Workers.GetAll)
    getAllWorkers(ctx: StateContext<WorkStateModel>){
        return this.workerService.apiWorkerGet().pipe(tap(workers=>{
            debugger;
            ctx.patchState({Workers : workers});
            })
        );
    }

    // @Action(Workers.Create)
    // createWorker(ctx: StateContext<WorkStateModel>, action: Workers.Create){
    //     return this.workerService.apiWorkerPost(action.payload)
    //     .pipe(
    //         tap(newWorker=>{
    //             ctx.setState(patch<WorkStateModel>({Workers: append<UserDto>([newWorker])}))
    //         })
    //     );
    // }

    // @Action(Workers.Update)
    // updateWorker(ctx: StateContext<WorkStateModel>, action:Workers.Update){
    //     return this.workerService.apiWorkerPut(action.payload)
    //     .pipe(
    //         tap(updatedWorker=>{
    //             ctx.setState(patch<WorkStateModel>({Workers: updateItem<UserDto>(c => c.id === updatedWorker.id, updatedWorker)}))
    //         })
    //     );
    // }

    // @Action(Workers.Delete)
    // deleteWorker(ctx: StateContext<WorkStateModel>, action: Workers.Delete){
    //     return this.workerService.apiWorkerDelete({id : action.id}).
    //     pipe(
    //         tap(deleted =>{
    //             ctx.setState(patch<WorkStateModel>({Workers : removeItem<UserDto>(c => c.id === action.id)}))
    //         })
    //     );
    // }
}