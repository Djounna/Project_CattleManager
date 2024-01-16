export namespace Cows{
    export class Create{
        static readonly type = '[Cows] Create Cow'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Cows] Update Cow'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Cows] Get All Cows'
    }

    export class Delete{
        static readonly type = '[Cows] Delete Cow'
        constructor(public id: number){}
    }
}

export namespace Groups{
    export class Create{
        static readonly type = '[Groups] Create Group'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Groups] Update Group'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Groups] Get All Groups'
    }

    export class Delete{
        static readonly type = '[Groups] Delete Group'
        constructor(public id: number){}
    }
}

export namespace Gestations{
    export class Create{
        static readonly type = '[Gestations] Create Gestation'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Gestations] Update Gestation'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Gestations] Get All Gestations'
    }

    export class Delete{
        static readonly type = '[Gestations] Delete Gestation'
        constructor(public id: number){}
    }
}


export namespace Interventions{
    export class Create{
        static readonly type = '[Interventions] Create Intervention'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Interventions] Update Intervention'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Interventions] Get All Interventions'
    }

    export class Delete{
        static readonly type = '[Interventions] Delete Intervention'
        constructor(public id: number){}
    }
}