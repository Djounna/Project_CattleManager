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