import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TableModule } from 'primeng/table';
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
import { TabViewModule } from  'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu'
import { CowsListViewComponent } from "./features/cattle/cows-list-view/cows-list-view.component";
import { ApiModule } from './api/api.module';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { CattleState } from './state/cattle/cattle.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    declarations: [AppComponent, ToolbarComponent, SidenavComponent, CowsPageComponent, AuthButtonComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
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

        ButtonModule,
        TableModule,
        TabViewModule,
        CardModule,
        DataViewModule,
        MenubarModule,
        MenuModule,
        // Routing configuration
        AppRoutingModule,

        //State Mgmt
        NgxsModule.forRoot([CattleState]),

        //API Service
        HttpClientModule,
        ApiModule.forRoot({ rootUrl: 'https://localhost:7276' }),
        // Auth0
        AuthModule.forRoot({
            domain: 'dev-c6lwemo7.us.auth0.com',
            clientId: '3CDOhKMSSA0Hs4VfKCxae3fGR4WuXcke',
            authorizationParams: {
                redirect_uri: window.location.origin,
                //  Request this audience at user authentication time
                audience: 'https://CM.WebApi',
                //  Request this scope at user authentication time
                scope: 'read:cows',
            },
            httpInterceptor: {
                    allowedList: [
                    {
                        // Match any request that starts 'https://dev-c6lwemo7.us.auth0.com/api/v2/' (note the asterisk)
                        // uri: 'https://dev-c6lwemo7.us.auth0.com/api/v2/*',
                        uri: 'https://localhost:7276/*',
                        tokenOptions: {
                        authorizationParams: {
                            // The attached token should target this audience
                            audience: 'https://CM.WebApi',

                            // The attached token should have these scopes
                            scope: 'read:cows'
                            }
                        }
                    }
                ]
            }
        }),
        CowsListViewComponent,
    ]
})
export class AppModule {}
