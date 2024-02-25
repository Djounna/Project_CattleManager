import { Component } from '@angular/core';
import { AuthService, GenericError } from '@auth0/auth0-angular';
import { filter, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{                    // implements OnInit
  title = 'CM.Portal';

  constructor(private authSrv : AuthService){}

  ngOnInit(): void {
    // this.checkLogin();
  }

  private checkLogin(): void{
    this.authSrv.getAccessTokenSilently().subscribe({}); 
    this.authSrv.error$.pipe(
      filter((e) => e instanceof GenericError && e.error === 'login_required'),
      mergeMap(() => this.authSrv.loginWithRedirect())
      ).subscribe(); 
  }
}
