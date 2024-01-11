import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { AlertDto } from "../../api/models";
import { AlertService, GroupService } from "../../api/services";
import { Alerts } from "./alert.action";
import { AlertStateModel } from "./alert.state";

@State<AlertStateModel>({
    name:'cattle',
    defaults:{
        Alerts : [],
    }
})

@Injectable()
export class AlertState{
    constructor(private alertService: AlertService){}

    @Selector()
    static cows(alertState:AlertStateModel){
        return alertState.Alerts;
    }

    /// Alerts Actions
    @Action(Alerts.GetAll)
    getAllAlerts(ctx: StateContext<AlertStateModel>){
        return this.alertService.apiAlertGet().pipe(tap(alerts=>{
            debugger;
            ctx.patchState({Alerts : alerts});
            })
        );
    }

    @Action(Alerts.Create)
    createAlert(ctx: StateContext<AlertStateModel>, action: Alerts.Create){
        return this.alertService.apiAlertPost(action.payload)
        .pipe(
            tap(newAlert=>{
                ctx.setState(patch<AlertStateModel>({Alerts: append<AlertDto>([newAlert])}))
            })
        );
    }

    @Action(Alerts.Update)
    updateAlert(ctx: StateContext<AlertStateModel>, action:Alerts.Update){
        return this.alertService.apiAlertPut(action.payload)
        .pipe(
            tap(updatedAlert=>{
                ctx.setState(patch<AlertStateModel>({Alerts: updateItem<AlertDto>(c => c.id === updatedAlert.id, updatedAlert)}))
            })
        );
    }

    @Action(Alerts.Delete)
    deleteAlert(ctx: StateContext<AlertStateModel>, action: Alerts.Delete){
        return this.alertService.apiAlertDelete({id : action.id}).
        pipe(
            tap(deleted =>{
                ctx.setState(patch<AlertStateModel>({Alerts : removeItem<AlertDto>(c => c.id === action.id)}))
            })
        );
    }
}