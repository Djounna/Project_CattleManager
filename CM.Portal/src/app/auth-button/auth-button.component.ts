import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl:'./auth-button.component.scss'
})
  // Inject the authentication service into your component through the constructor
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}