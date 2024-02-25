import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

    @Output() onShowSidebar : EventEmitter<boolean> = new EventEmitter<boolean>()

    items: MenuItem[] | undefined;
    title: string = '';
    // public user: any = null;

    constructor(
      private router: Router, 
      public auth: AuthService) {}


    ngOnInit() {
      this.router.events
      // .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event)=> {
        if(event instanceof NavigationEnd){
          switch(event.urlAfterRedirects){
            case '/dashboard' : this.title = 'Dashboard'; break;
            case '/jobs' : this.title = 'Tâches'; break;
            case '/cows' : this.title = 'Bétail'; break;
            case '/groups' : this.title = 'Groupe'; break;
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

    showSidebar(): void{
      this.onShowSidebar.emit(true);
    }
}


