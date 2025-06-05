import { AlertDto } from "../../api/models"

export namespace Alerts{
    export class Create{
        static readonly type = '[Alerts] Create Alert'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Alerts] Update Alert'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Alerts] Get All Alerts'
    }

    export class GetAllActive{
        static readonly type ='[Alerts] Get All Active Alerts'
    }

    export class ReceiveNew{
        static readonly type = '[Alerts] Receive New Alert'
        constructor(public payload: AlertDto){}
    }

    export class Delete{
        static readonly type = '[Alerts] Delete Alert'
        constructor(public id: number){}
    }
}