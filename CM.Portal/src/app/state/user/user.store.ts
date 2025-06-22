import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UserManagementService } from "../../api/services";
import { UserStateModel } from "./user.state";
import { User } from "./user.action";
import { filter, switchMap, tap, UnsubscriptionError } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";
import { jwtDecode } from "jwt-decode";
import { cmJwtPayload } from "../../models/jwt/jwt";
import { append, patch } from "@ngxs/store/operators";
import { WorkStateModel } from "../work/work.state";

@State<UserStateModel>({
  name: 'user',
  defaults: {
    CurrentUserAuthId: '',
    UserRoles: [], 
    IsAdmin : false,
    IsWorker: false,
  }
})

@Injectable()
export class UserState {
  constructor(
    private authService: AuthService,
    private userService: UserManagementService
  ) { }

  @Selector()
  static CurrentUserAuthId(userState: UserStateModel){
    return userState.CurrentUserAuthId;
  }

  @Selector()
  static UserRoles(userState: UserStateModel){
    return userState.UserRoles;
  }

  @Selector()
  static IsAdmin(userState: UserStateModel){
    return userState.IsAdmin;
  }

  @Selector()
  static IsWorker(userState: UserStateModel){
    return userState.IsWorker
  }

@Action(User.Create)
createUser(ctx: StateContext<UserStateModel>, action: User.Create){
  return this.userService.apiUserManagementPost(action.payload)
    .pipe(
      tap(newUser =>{
        // ctx.setState(patch<UserStateModel>({Workers: append<UserDto>([newUser])}))
      })
    )
}

@Action(User.GetToken)
getToken(ctx: StateContext<UserStateModel>){
  this.authService.isAuthenticated$.pipe(
    filter(isAuthenticated => isAuthenticated),  
    switchMap(() => this.authService.getAccessTokenSilently({ cacheMode: 'cache-only' })), // Try cache first
    switchMap(token => token ? [token] : this.authService.getAccessTokenSilently()), // If no cache, fetch a new token
    tap((token) =>{
        console.log('Final Token:', token);
        const decoded = jwtDecode<cmJwtPayload>(token);
        console.log(decoded);
        // const autId = decoded['cattlemanager/authId'];
        const roles = decoded['cattlemanager/roles'];
        const sub = decoded['sub'];
        ctx.patchState({ CurrentUserAuthId: sub });
        if (roles.includes('Manager')){
          ctx.patchState({IsAdmin : true})
        }
        else{
          ctx.patchState({IsAdmin : false})
        }
        if(roles.includes('Worker')){
          ctx.patchState({IsWorker : true})
        }
        else{
          ctx.patchState({ IsWorker: false})
        }
      })
    ) 
    .subscribe({
      error:(err) => {
        this.authService.loginWithRedirect();
      }
    });
}

@Action(User.SetRoles)
setUserRoles(ctx: StateContext<UserStateModel>, action: User.SetRoles){
  const roles = action.roles;
  if (roles.includes('Manager')){
    ctx.patchState({IsAdmin : true})
  }
  else{
    ctx.patchState({IsAdmin : false})
  }
  if(roles.includes('Worker')){
    ctx.patchState({IsWorker : true})
  }
  else{
    ctx.patchState({ IsWorker: false})
  }
}

@Action(User.GetRoles)
getRoles(ctx: StateContext<UserStateModel>, action: User.GetRoles){
  return this.userService.apiUserManagementUserUserIdRolesGet({userId: action.id})
    .pipe(
      tap(roles => {
        ctx.patchState({UserRoles : roles})
        if(roles.some(r => r.name === 'Admin')){
          ctx.patchState({IsAdmin : true})
        }
        else{
          ctx.patchState({IsAdmin : false})
        }
        if(roles.some(r => r.name === 'Worker')){
          ctx.patchState({IsAdmin : true})
        }
        else{
          ctx.patchState({IsAdmin : true})
        }
      })
    )
}

}