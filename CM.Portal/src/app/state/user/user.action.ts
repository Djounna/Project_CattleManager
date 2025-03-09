export namespace User{
    export class SetRoles{
        static readonly type = '[User] Set User'
        constructor(public roles: string[]){}
    }
    export class GetToken{
        static readonly type = '[User] Get Token'
    }
    export class GetRoles{
        static readonly type = '[User] Get Roles'
        constructor(public id: number){}
    }
}