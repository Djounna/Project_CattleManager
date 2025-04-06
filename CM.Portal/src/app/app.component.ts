import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Select, Store } from '@ngxs/store';
import { User } from './state/user/user.action';
import { filter, Observable, switchMap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { cmJwtPayload } from './models/jwt/jwt';
import { UserState } from './state/user/user.store';
import { Router } from '@angular/router';

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
  IsAdmin = false;
  IsWorker = false;
  public DrawerVisible: boolean = false;

  constructor(
    private router: Router,
    private authService : AuthService){}

  ngOnInit(): void {
    this.checkLogin();
  }

  private checkLogin(): void{
    this.store.dispatch(new User.GetToken())
    this.IsAdmin$.subscribe({ 
      next: (res) => { this.IsAdmin = res; }
    }) ;
    this.IsWorker$.subscribe({ 
      next: (res) => { this.IsWorker = res; }
    }) ;

    if (this.IsAdmin){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/todolist']);
    }
  }

  public ToggleDrawer(): void{
    this.DrawerVisible = !this.DrawerVisible;
  }
}