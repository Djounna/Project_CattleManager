import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    declarations: [AppComponent, AuthButtonComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        // material
        MatSidenavModule,
        // primeNg
        SidebarModule,
        PanelMenuModule,

        // Routing configuration
        AppRoutingModule,
        // Auth0
        AuthModule.forRoot({
            domain: 'dev-c6lwemo7.us.auth0.com',
            clientId: '3CDOhKMSSA0Hs4VfKCxae3fGR4WuXcke',
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        }),
        ToolbarComponent,
        SidenavComponent
    ]
})
export class AppModule {}
