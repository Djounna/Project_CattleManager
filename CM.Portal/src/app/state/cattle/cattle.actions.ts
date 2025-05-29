export namespace Cows{
    export class Create{
        static readonly type = '[Cows] Create Cow'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Cows] Update Cow'
        constructor(public payload : any){}
    }

    export class Get{
        static readonly type = '[Cows Get Cow'
        constructor(public id: number){}    
    }

    export class GetAll{
        static readonly type ='[Cows] Get All Cows'
    }

    export class Delete{
        static readonly type = '[Cows] Delete Cow'
        constructor(public id: number){}
    }
}

export namespace CowDetails{
    export class Get{
        static readonly type = '[CowDetails] Get Cow Details'
        constructor(public id: number){}
    }

    export class Reset{
        static readonly type = '[CowDetails] Reset Dow Details'
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

export namespace Vaccinations{
    export class Create{
        static readonly type = '[Vaccinations] Create Vaccination'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Vaccinations] Update Vaccination'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Vaccinations] Get All Vaccinations'
    }

    export class Delete{
        static readonly type = '[Vaccinations] Delete Vaccination'
        constructor(public id: number){}
    }
}

export namespace Conditions{
    export class Create{
        static readonly type = '[Conditions] Create Condition'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Conditions] Update Condition'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Conditions] Get All Conditions'
    }

    export class Delete{
        static readonly type = '[Conditions] Delete Condition'
        constructor(public id: number){}
    }
}

export namespace Treatments{
    export class Create{
        static readonly type = '[Treatments] Create Treatment'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Treatments] Update Treatment'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Treatments] Get All Treatments'
    }

    export class Delete{
        static readonly type = '[Treatments] Delete Treatment'
        constructor(public id: number){}
    }
}

export namespace CattleStatistics{
    export class Get{
        static readonly type = '[Statistics] Get Cattle Statistics'
    }
}