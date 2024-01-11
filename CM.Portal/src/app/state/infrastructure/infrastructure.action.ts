export namespace Pens{
    export class Create{
        static readonly type = '[Pens] Create Pen'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Pens] Update Pen'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Pens] Get All Pens'
    }

    export class Delete{
        static readonly type = '[Pens] Delete Pen'
        constructor(public id: number){}
    }
}

export namespace Stocks{
    export class Create{
        static readonly type = '[Stocks] Create Stock'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[Stocks] Update Stock'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[Stocks] Get All Stocks'
    }

    export class Delete{
        static readonly type = '[Stocks] Delete Stock'
        constructor(public id: number){}
    }
}