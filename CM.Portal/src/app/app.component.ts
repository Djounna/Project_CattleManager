import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Select, Store } from '@ngxs/store';
import { User } from './state/user/user.action';
import { filter, Observable, switchMap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { cmJwtPayload } from './models/jwt/jwt';
import { UserState } from './state/user/user.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent{
  public Title = 'CM.Portal';

  protected store = inject(Store);
  @Select(UserState.IsAdmin) IsAdmin$!: Observable<boolean>;
  @Select(UserState.IsWorker) IsWorker$!: Observable<boolean>;

  constructor(
    private authService : AuthService){}

  ngOnInit(): void {
    this.checkLogin();
  }

  private checkLogin(): void{
    debugger;
    this.store.dispatch(new User.GetToken());
    
  // this.authService.isAuthenticated$.pipe(
  //   filter(isAuthenticated => isAuthenticated),  
  //   switchMap(() => this.authService.getAccessTokenSilently({ cacheMode: 'cache-only' })), // Try cache first
  //   switchMap(token => token ? [token] : this.authService.getAccessTokenSilently())) // If no cache, fetch a new token
  //   .subscribe({
  //     next:(token) => {
  //       debugger;
  //       console.log('Final Token:', token);
  //       const decoded = jwtDecode<cmJwtPayload>(token);
  //       const roles = decoded['cattlemanager/roles'];
  //       this.store.dispatch(new User.SetRoles(roles));
  //     },
  //     error:(error) => console.error('Token fetch error:', error)
  //   });
  }
}