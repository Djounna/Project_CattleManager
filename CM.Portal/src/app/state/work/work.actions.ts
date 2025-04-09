
export namespace Workers{
    export class Create{
        static readonly type = '[Workers] Create Worker'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Workers] Update Worker'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Workers] Get All Workers'
    }

    export class Delete{
        static readonly type = '[Workers] Delete Worker'
        constructor(public id: number){}
    }
}

export namespace Jobs{
    export class Create{
        static readonly type = '[Jobs] Create Job'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Jobs] Update Job'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Jobs] Get All Jobs'
    }

    export class GetAllByDate{
        static readonly type ='[Jobs] Get All Jobs By Date'
        constructor(public date: string){}
    }

    export class GetAllDetails{
        static readonly type ='[Jobs] Get All Jobs Details'
    }

    export class GetAllDetailsByDate{
        static readonly type ='[Jobs] Get All Jobs Details By Date'
        constructor(public date: string){}
    }

    export class Delete{
        static readonly type = '[Jobs] Delete Job'
        constructor(public id: number){}
    }

    export class Assign{
        static readonly type = '[Jobs] Assign Job'
        constructor(public payload : any){}
    }
}