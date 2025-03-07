import { Component } from '@angular/core';
import { AuthService, GenericError } from '@auth0/auth0-angular';
import { filter, mergeMap, switchMap } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent{
  public Title = 'CM.Portal';

  constructor(private authService : AuthService){}

  ngOnInit(): void {
    this.checkLogin();
  }

  private checkLogin(): void{
    this.authService.isAuthenticated$.pipe(
      filter(isAuthenticated => isAuthenticated),  
      switchMap(() => this.authService.getAccessTokenSilently({ cacheMode: 'cache-only' })), // Try cache first
      switchMap(token => token ? [token] : this.authService.getAccessTokenSilently())) // If no cache, fetch a new token
      .subscribe({
        next:(token) => console.log('Final Token:', token),
        error:(error) => console.error('Token fetch error:', error)
      });
  }

}
