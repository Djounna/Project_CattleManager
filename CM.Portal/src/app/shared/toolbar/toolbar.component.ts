import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: false
})
export class ToolbarComponent {
  @Input() ShowMenu: boolean = false;
  @Input() ShowAlerts: boolean = true;
  @Output() onShowSidebar: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() onShowSideAlerts: EventEmitter<boolean> = new EventEmitter<boolean>()

  private alertsCount: number = 0;
  @Input() set AlertsCount(value: number) {
    this.alertsCount = value;
  }
  public get Alerts() {
    return this.alertsCount;
  }

  title: string = '';

  constructor(
    private router: Router,
    public auth: AuthService) { }

  ngOnInit() {
    this.router.events
      // .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          switch (event.urlAfterRedirects) {
            case '/dashboard': this.title = 'Dashboard'; break;
            case '/todolist': this.title = 'Planning'; break;
            case '/statistics': this.title = 'Statistiques'; break;
            case '/jobs': this.title = 'Tâches'; break;
            case '/cows': this.title = 'Bétail'; break;
            case '/events': this.title = 'Evènements'; break;
            case '/groups': this.title = 'Groupes'; break;
            case '/pens': this.title = 'Enclos'; break;
            case '/milking': this.title = 'Traite'; break;
          }
        }
      });

    // let that = this
    // this.auth.user$.subscribe({
    //     next(res: any){
    //     that.user = res;
    //         console.log(res);
    //     }
    // });
  }

  showSidebar(): void {
    this.onShowSidebar.emit(true);
  }

  showSideAlerts(): void {
    this.onShowSideAlerts.emit(true);
  }
}


