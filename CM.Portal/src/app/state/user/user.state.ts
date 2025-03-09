import { RoleDto } from "../../api/models";

export interface UserStateModel {
  UserRoles: RoleDto[]
  IsAdmin: boolean,
  IsWorker: boolean,
}
