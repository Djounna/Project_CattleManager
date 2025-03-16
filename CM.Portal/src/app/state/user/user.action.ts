import { UserInput } from "../../api/models"
import { NewUserDto } from "../../models/user/new-user-dto"

export namespace User{
    export class Create{
        static readonly type = '[User] Create User'
        constructor(public payload: any){}
    }
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