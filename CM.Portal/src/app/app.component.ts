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
import { SignalRService } from './services/signalr.service';
import { MenuItem } from 'primeng/api/menuitem';
import { MenuService } from './services/menu.service';
import { Cows, Groups } from './state/cattle/cattle.actions';
import { Pens } from './state/infrastructure/infrastructure.action';
import { Workers } from './state/work/work.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  public Title = 'CM.Portal';

  protected store = inject(Store);
  @Select(UserState.IsAdmin) IsAdmin$!: Observable<boolean>;
  IsAdmin = false;
  @Select(UserState.IsWorker) IsWorker$!: Observable<boolean>;
  IsWorker = false;
  @Select(AlertState.activeAlerts) Alerts$!: Observable<AlertDto[]>;
  public Alerts: AlertDto[] = [];
  public MenuItems: MenuItem[] = [];

  public DrawerVisible: boolean = false;
  public AlertsDrawerVisible: boolean = false;

  constructor(
    private router: Router,
    private signalRService: SignalRService,
    private menuService: MenuService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.checkLogin();
    this.signalRService.startConnection();
    this.signalRService.addMessageListener();
  }

  private checkLogin(): void {
    this.IsAdmin$.subscribe({
      next: (res) => {
        this.IsAdmin = res;
        if (this.IsAdmin) {
          this.MenuItems = this.menuService.GetAdminMenu()
          this.loadData();
          this.router.navigate(['/dashboard']);
        }
        else {
          this.MenuItems = this.menuService.GetWorkerMenu()
          this.loadData();
          this.router.navigate(['/dashboard']);
        }
      }
    });
    this.store.dispatch(new User.GetToken())
  }

  private loadData(){
    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
    this.store.dispatch(new Workers.GetAll());
    this.checkAlerts();
  }

  private checkAlerts() {
    this.Alerts$.subscribe({ next: (res) => this.Alerts = res });
    this.store.dispatch(new Alerts.GetAllActive())
  }

  public ToggleDrawer(): void {
    this.DrawerVisible = !this.DrawerVisible;
  }

  public ToggleAlertDrawer(): void {
    this.AlertsDrawerVisible = !this.AlertsDrawerVisible;
  }
}
