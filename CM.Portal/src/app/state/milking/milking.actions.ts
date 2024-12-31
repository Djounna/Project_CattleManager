export namespace Milkings{
    export class GetAll{
        static readonly type ='[Milkings] Get All Milkings'
    }
    export class GetAllLastMonth{
        static readonly type ='[Milkings] Get All Milkings from the last month'
    }
    export class Create{
        static readonly type = '[Milkings] Create Milking'
        constructor(public payload : any){}
    }
    export class Update{
        static readonly type = '[Milkings] Update Milking'
        constructor(public payload : any){}
    }
    export class Delete{
        static readonly type = '[Milkings] Delete Milking'
        constructor(public id: number){}
    }
}

export namespace MilkProductions{
    export class Create{
        static readonly type = '[MilkProductions] Create MilkProduction'
        constructor(public payload : any){}
    }

    export class Update{
        static readonly type = '[MilkProductions] Update MilkProduction'
        constructor(public payload : any){}
    }

    export class GetAll{
        static readonly type ='[MilkProductions] Get All MilkProductions'
    }

    export class Delete{
        static readonly type = '[MilkProductions] Delete MilkProduction'
        constructor(public id: number){}
    }
}

export namespace MilkingInput{
    export class Update{
        static readonly type = '[MilkingInput] Update MilkingInput'
        constructor(public payload : any){}
    }
}

export namespace MilkingInputs{
    export class Update{
        static readonly type = '[MilkingInputs] Update MilkingInputs'
        constructor(public payload : any){}
    }

    export class Get{
        static readonly type ='[MilkingInputs] Get MilkingInputs'
        constructor(public date: string){}
    }
}