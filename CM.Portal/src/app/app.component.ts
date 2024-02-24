import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{                    // implements OnInit
  title = 'CM.Portal';

  //constructor(private authSrv : AuthService){}

  // ngOnInit(): void {
  //   this.authSrv.getAccessTokenSilently().subscribe({}); 
  //   this.authSrv.error$.pipe(
  //     filter((e) => e instanceof GenericError && e.error === 'login_required'),
  //     mergeMap(() => this.authSrv.loginWithRedirect())
  //     ).subscribe(); 
  // }
}
