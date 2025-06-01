import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Select, Store } from '@ngxs/store';
import { User } from './state/user/user.action';
import { Observable } from 'rxjs';
import { UserState } from './state/user/user.store';
import { Router } from '@angular/router';
import { AlertState } from './state/alert/alert.store';
import { AlertDto } from './api/models';
import { Alerts } from './state/alert/alert.action';

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
  IsAdmin = false;
  @Select(UserState.IsWorker) IsWorker$!: Observable<boolean>;
  IsWorker = false;
  @Select(AlertState.activeAlerts) Alerts$!: Observable<AlertDto[]>;
  public Alerts!: AlertDto[];

  public DrawerVisible: boolean = false;
  public AlertsDrawerVisible: boolean = false;

  constructor(
    private router: Router,
    private authService : AuthService){}

  ngOnInit(): void {
    this.checkLogin();
    this.checkAlerts();
  }

  private checkLogin(): void{
    this.IsAdmin$.subscribe({ 
      next: (res) => { this.IsAdmin = res;
      if (this.IsAdmin)
        {
        this.router.navigate(['/dashboard']);
        }
        else{
          this.router.navigate(['/todolist']);
        }
      }
    }) ;
    this.store.dispatch(new User.GetToken())

    // this.IsWorker$.subscribe({ 
    //   next: (res) => { this.IsWorker = res;
    //   if (this.IsWorker)
    //     {
    //       this.router.navigate(['/todolist']);
    //     }
    //   }
    // }) ;
  }

  private checkAlerts(){
    this.Alerts$.subscribe({
      next: (res) => this.Alerts = res
    })
    this.store.dispatch(new Alerts.GetAll())
  }

  public ToggleDrawer(): void{
    this.DrawerVisible = !this.DrawerVisible;
  }

  public ToggleAlertDrawer(): void{
    this.AlertsDrawerVisible = !this.AlertsDrawerVisible;
  }
}