import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{                    // implements OnInit
  title = 'CM.Portal';

  @ViewChild('sidebar') sidebar!: SidebarComponent


  //constructor(private authSrv : AuthService){}

  // ngOnInit(): void {
  //   this.authSrv.getAccessTokenSilently().subscribe({}); 
  //   this.authSrv.error$.pipe(
  //     filter((e) => e instanceof GenericError && e.error === 'login_required'),
  //     mergeMap(() => this.authSrv.loginWithRedirect())
  //     ).subscribe(); 
  // }

  showSidebar() : void{
    this.sidebar.visible = true;
  }
}
