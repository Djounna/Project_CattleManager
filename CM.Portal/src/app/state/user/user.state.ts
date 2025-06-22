import { RoleDto, UserDto } from "../../api/models";

export interface UserStateModel {
  CurrentUserAuthId: string,
  UserRoles: RoleDto[]
  IsAdmin: boolean,
  IsWorker: boolean,
}
