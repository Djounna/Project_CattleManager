import { AlertDto } from "../../api/models";

export interface AlertStateModel{
    Alerts : AlertDto[]
    AlertsActive : AlertDto[]
}