import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  response = '';

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}
}
