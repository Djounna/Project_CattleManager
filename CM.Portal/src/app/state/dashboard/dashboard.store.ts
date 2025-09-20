import { Action, Selector, State, StateContext } from "@ngxs/store";
import { DashboardStateModel } from "./dashboard.state";
import { Injectable } from "@angular/core";
import { DashboardService } from "../../api/services";
import { DashboardInfo } from "./dashboard.actions";
import { tap } from "rxjs";

@State<DashboardStateModel>({
    name: 'dashboard',
    defaults: {
        DashboardInfo : undefined
    }
})

@Injectable()
export class DashboardState{
    constructor(
        private dashboardService: DashboardService
    ){}

    @Selector()
    static dashbaordInfo(dashboardState: DashboardStateModel){
        return dashboardState.DashboardInfo;
    }

    @Action(DashboardInfo.Get)
    getDashboardInfo(ctx: StateContext<DashboardStateModel>){
        return this.dashboardService.apiDashboardGet().pipe(tap(infos => {
            ctx.patchState({DashboardInfo: infos});
        }))
    }
}