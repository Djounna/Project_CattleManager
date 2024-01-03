import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    items: MenuItem[] | undefined;
    // public user: any = null;

    constructor(public auth: AuthService) {}

    ngOnInit() {
        // let that = this
        // this.auth.user$.subscribe({
        //     next(res: any){
        //     that.user = res;
        //         console.log(res);
        //     }
        // });
    }
}
