import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the ApiModule generatred by Ng-OpenApi-gen
import { ApiModule } from './api/api.module';
// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// PrimeNgModules
import { TableModule } from 'primeng/table';
import { TabViewModule } from  'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// Material
import { MatCardModule} from '@angular/material/card';


// Shared components
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
// Screens components
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
// Features components
import { CowsListViewComponent } from "./features/cattle/cows-list-view/cows-list-view.component";


// Ngxs Store and states
import { NgxsModule } from '@ngxs/store';
import { CattleState } from './state/cattle/cattle.store';
import { InfrastructureState } from './state/infrastructure/infrastructure.store';
import { WorkState } from './state/work/work.store';
import { WorkersListViewComponent } from './features/work/workers-list-view/workers-list-view.component';
import { WorkersPageComponent } from './screens/work/workers-page/workers-page.component';
import { CowCardComponent } from './features/cattle/cow-card/cow-card.component';
import { GroupCardComponent } from './features/cattle/group-card/group-card.component';
import { AlertListComponent } from './features/alerts/alert-list/alert-list.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { JobListViewComponent } from './features/work/job-list-view/job-list-view.component';
import { InterventionListComponent } from './features/cattle/intervention/intervention-list/intervention-list.component';
import { JobsPageComponent } from './screens/work/jobs-page/jobs-page.component';
import { AlertState } from './state/alert/alert.store';
import { MilkingState } from './state/milking/milking.store';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { MessageService } from 'primeng/api';
import { GestationsListComponent } from './features/cattle/gestation/gestations-list/gestations-list.component';
import { GroupCardViewComponent } from './features/cattle/group-card-view/group-card-view.component';
import { GroupPageComponent } from './screens/cattle/group-page/group-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CreateJobDialogComponent } from './features/work/job/create-job-dialog/create-job-dialog.component';
import { CreateCowDialogComponent } from './features/cattle/cow/create-cow-dialog/create-cow-dialog.component';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { JobDetailsListComponent } from './features/work/job-details-list/job-details-list.component';
import { GroupDatagridComponent } from './features/groups/group-datagrid/group-datagrid.component';
import { PenDatagridComponent } from './features/pens/pen-datagrid/pen-datagrid.component';
import { PicklistToolComponent } from './features/shared/picklist-tool/picklist-tool.component';
import { PickListModule } from 'primeng/picklist';
import { AssignJobDialogComponent } from './features/work/job/assign-job-dialog/assign-job-dialog.component';
import { CreateGroupDialogComponent } from './features/groups/group/create-group-dialog/create-group-dialog.component';
import { PicklistGroupDialogComponent } from './features/shared/dialogs/picklist-group-dialog/picklist-group-dialog.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
    declarations: [AppComponent, ToolbarComponent, SidenavComponent,  AuthButtonComponent, 
        WorkersPageComponent, CowsPageComponent, GroupPageComponent, DashboardComponent, JobsPageComponent,
        CowsListViewComponent, WorkersListViewComponent, AlertListComponent, CowCardComponent, GroupCardComponent, GroupCardViewComponent,
        AlertListComponent, JobListViewComponent, InterventionListComponent, GestationsListComponent, JobDetailsListComponent,
        CreateJobDialogComponent, CreateCowDialogComponent, GroupDatagridComponent, PenDatagridComponent, PicklistToolComponent,
        AssignJobDialogComponent,
        CreateGroupDialogComponent,
        PicklistGroupDialogComponent,
        SidebarComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }, AuthGuard, MessageService, DialogService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // material
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        // primeNg
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        RadioButtonModule,
        InputNumberModule,
        DropdownModule,
        SidebarModule,
        PanelMenuModule,
        DividerModule,
        ToastModule,
        CalendarModule,
        ButtonModule,
        TableModule,
        TabViewModule,
        CardModule,
        MenubarModule,
        MenuModule,
        ProgressSpinnerModule,
        PanelModule,
        DialogModule,
        DynamicDialogModule,
        DataViewModule,
        PickListModule,
        // Routing configuration
        AppRoutingModule,

        //State Mgmt
        NgxsModule.forRoot([AlertState, CattleState, MilkingState, WorkState, InfrastructureState]),

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
                scope: 'read:events write:events read:cows write:cows read:jobs write:jobs read:infrastructures write:infrastructures',
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
                            scope: 'read:events write:events read:cows write:cows read:jobs write:jobs read:infrastructures write:infrastructures'
                            }
                        }
                    }
                ]
            }
        }),
    ],
})
export class AppModule {}
