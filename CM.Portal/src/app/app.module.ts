import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the ApiModule generatred by Ng-OpenApi-gen
import { ApiModule } from './api/api.module';
// Import the injector module and the HTTP client module from Angular
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// PrimeNgModules
import { AuraLime } from './styles/mypreset';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PickListModule } from 'primeng/picklist';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PopoverModule } from 'primeng/popover';
import { ProgressBarModule } from 'primeng/progressbar';
import { DatePickerModule } from 'primeng/datepicker'; 
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TimelineModule } from 'primeng/timeline'
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule} from 'primeng/image';
import { FluidModule } from 'primeng/fluid';
import { DrawerModule } from 'primeng/drawer'; 
import { FieldsetModule } from 'primeng/fieldset';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
// Material
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatIconModule} from '@angular/material/icon';

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
import { InterventionListComponent } from './features/intervention/intervention-list/intervention-list.component';
import { JobsPageComponent } from './screens/work/jobs-page/jobs-page.component';
import { AlertState } from './state/alert/alert.store';
import { MilkingState } from './state/milking/milking.store';
import { GestationsListComponent } from './features/gestation/gestations-list/gestations-list.component';
import { GroupCardViewComponent } from './features/cattle/group-card-view/group-card-view.component';
import { GroupPageComponent } from './screens/cattle/group-page/group-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateJobDialogComponent } from './features/work/job/create-job-dialog/create-job-dialog.component';
import { CreateCowDialogComponent } from './features/cattle/cow/create-cow-dialog/create-cow-dialog.component';
import { JobDetailsListComponent } from './features/work/job-details-list/job-details-list.component';
import { PicklistToolComponent } from './features/shared/picklist-tool/picklist-tool.component';
import { AssignJobDialogComponent } from './features/work/job/assign-job-dialog/assign-job-dialog.component';
import { CreateGroupDialogComponent } from './features/groups/group/create-group-dialog/create-group-dialog.component';
import { PicklistGroupDialogComponent } from './features/shared/dialogs/picklist-group-dialog/picklist-group-dialog.component';
import { GroupCardSmallComponent } from './features/groups/group-card-small/group-card-small.component';
import { PenCardSmallComponent } from './features/pens/pen-card-small/pen-card-small.component';
import { MilkingPageComponent } from './screens/milk/milking-page/milking-page.component';
import { MilkingInputComponent } from './features/milking/milking-input/milking-input.component';
import { MonthMilkingsGraphComponent } from './features/graphs/milkings/month-milkings-graph/month-milkings-graph.component';
import { CowDetailsComponent } from './screens/cows/cow-details/cow-details-page.component';
import { PenNamePipe } from './utils/pipes/pen-name.pipe';
import { GroupNamePipe } from './utils/pipes/group-name.pipe';
import { CowNamePipe } from './utils/pipes/cow-name.pipe';
import { CowIdentifierPipe } from './utils/pipes/cow-identifier.pipe';
import { UpdateCowDialogComponent } from './features/cattle/cow/update-cow-dialog/update-cow-dialog.component';
import { providePrimeNG } from 'primeng/config';
import { CreateGestationDialogComponent } from './features/gestation/create-gestation-dialog/create-gestation-dialog.component';
import { UpdateGestationDialogComponent } from './features/gestation/update-gestation-dialog/update-gestation-dialog.component';
import { CreateVaccinationDialogComponent } from './features/vaccination/create-vaccination-dialog/create-vaccination-dialog.component';
import { UpdateVaccinationDialogComponent } from './features/vaccination/update-vaccination-dialog/update-vaccination-dialog.component';
import { VaccinationListComponent } from './features/vaccination/vaccination-list/vaccination-list.component';
import { CreateInterventionDialogComponent } from './features/intervention/create-intervention-dialog/create-intervention-dialog.component';
import { UpdateInterventionDialogComponent } from './features/intervention/update-intervention-dialog/update-intervention-dialog.component';
import { GestationsBoardComponent } from './features/gestation/gestations-board/gestations-board.component';
import { CowGenealogyComponent } from './features/cattle/cow/cow-genealogy/cow-genealogy.component';
import { CowTimelineComponent } from './features/cattle/cow/cow-timeline/cow-timeline.component';
import { CowMonthMilkingsGraphComponent } from './features/graphs/milkings/cow-month-milkings-graph/cow-month-milkings-graph.component';
import { StatisticsCowsPageComponent } from './screens/statistics/statistics-cows-page/statistics-cows-page.component';
import { SatisticsJobsPageComponent } from './screens/statistics/satistics-jobs-page/satistics-jobs-page.component';
import { GroupPieChartComponent } from './features/graphs/cattle/group-pie-chart/group-pie-chart.component';
import { PenPieChartComponent } from './features/graphs/cattle/pen-pie-chart/pen-pie-chart.component';
import { AgePieChartComponent } from './features/graphs/cattle/age-pie-chart/age-pie-chart.component';
import { AgeBarChartComponent } from './features/graphs/cattle/age-bar-chart/age-bar-chart.component';
import { PenPageComponent } from './screens/cattle/pen-page/pen-page.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { PicklistPenDialogComponent } from './features/shared/dialogs/picklist-pen-dialog/picklist-pen-dialog.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { TodoListComponent } from './features/work/todo-list/todo-list.component';
import { UserState } from './state/user/user.store';
import { CreateUserDialogComponent } from './features/users/user/create-user-dialog/create-user-dialog.component';
import { HomeComponent } from './screens/home/home.component';
import { ActivitiesShortlistComponent } from './features/activities/activities-shortlist/activities-shortlist.component';
import { CreateConditionDialogComponent } from './features/condition/create-condition-dialog/create-condition-dialog.component';
import { CreateTreatmentDialogComponent } from './features/treatment/create-treatment-dialog/create-treatment-dialog.component';
import { CowGenealogyDialogComponent } from './features/cattle/cow/cow-genealogy-dialog/cow-genealogy-dialog.component';
import { CowTimelineDialogComponent } from './features/cattle/cow/cow-timeline-dialog/cow-timeline-dialog.component';
import { CowMonthMilkingsGraphDialogComponent } from './features/cattle/cow/cow-month-milkings-graph-dialog/cow-month-milkings-graph-dialog.component';
import { SideAlertsComponent } from './features/alerts/side-alerts/side-alerts.component';
import { CreateAlertDialogComponent } from './features/alerts/create-alert-dialog/create-alert-dialog.component';
import { UpdateGroupDialogComponent } from './features/groups/group/update-group-dialog/update-group-dialog.component';
import { CreatePenDialogComponent } from './features/pens/pen/create-pen-dialog/create-pen-dialog.component';
import { UpdatePenDialogComponent } from './features/pens/pen/update-pen-dialog/update-pen-dialog.component';
import { UpdateJobDialogComponent } from './features/work/job/update-job-dialog/update-job-dialog.component';

@NgModule({ 
    declarations: 
    [AppComponent, ToolbarComponent, SidenavComponent, AuthButtonComponent,
        WorkersPageComponent, CowsPageComponent, GroupPageComponent, DashboardComponent, JobsPageComponent,
        CowsListViewComponent, WorkersListViewComponent, AlertListComponent, CowCardComponent, GroupCardComponent, GroupCardViewComponent,
        AlertListComponent, JobListViewComponent, InterventionListComponent, GestationsListComponent, JobDetailsListComponent,
        CreateJobDialogComponent, CreateCowDialogComponent,  PicklistToolComponent,
        AssignJobDialogComponent,
        CreateGroupDialogComponent,
        PicklistGroupDialogComponent,
        PicklistPenDialogComponent,
        GroupCardSmallComponent,
        PenCardSmallComponent,
        MilkingPageComponent,
        MilkingInputComponent,
        MonthMilkingsGraphComponent,
        CowDetailsComponent,
        PenNamePipe,
        GroupNamePipe,
        CowNamePipe,
        CowIdentifierPipe,
        UpdateCowDialogComponent,
        CreateGestationDialogComponent,
        UpdateGestationDialogComponent,
        CreateVaccinationDialogComponent,
        UpdateVaccinationDialogComponent,
        VaccinationListComponent,
        CreateInterventionDialogComponent,
        UpdateInterventionDialogComponent,
        GestationsBoardComponent,
        CowGenealogyComponent,
        CowTimelineComponent,
        CowMonthMilkingsGraphComponent,
        StatisticsCowsPageComponent,
        SatisticsJobsPageComponent,
        GroupPieChartComponent,
        PenPieChartComponent,
        AgePieChartComponent,
        AgeBarChartComponent,
        PenPageComponent,
        LoaderComponent,
        TodoListComponent,
        CreateUserDialogComponent,
        HomeComponent,
        ActivitiesShortlistComponent,
        CreateConditionDialogComponent,
        CreateTreatmentDialogComponent,
        CowGenealogyDialogComponent,
        CowTimelineDialogComponent,
        CowMonthMilkingsGraphDialogComponent,
        SideAlertsComponent,
        CreateAlertDialogComponent,
        UpdateGroupDialogComponent,
        CreatePenDialogComponent,
        UpdatePenDialogComponent,
        UpdateJobDialogComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LeafletModule,
        // material
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSliderModule,
        MatIconModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        // primeNg
        ButtonModule,
        InputTextModule,
        RadioButtonModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputNumberModule,
        SliderModule,
        SidebarModule,
        PanelMenuModule,
        DividerModule,
        ToastModule,
        CalendarModule,
        ButtonModule,
        TableModule,
        TabsModule,
        CardModule,
        MenubarModule,
        MenuModule,
        ProgressSpinnerModule,
        PanelModule,
        DialogModule,
        DataViewModule,
        PickListModule,
        ChartModule,
        OverlayPanelModule,
        DatePickerModule,
        PopoverModule,
        SelectModule,
        ProgressBarModule,
        OrganizationChartModule,
        TimelineModule,
        CheckboxModule,
        ImageModule,
        FluidModule,
        DrawerModule,
        FieldsetModule,
        BadgeModule,
        OverlayBadgeModule,
        // Routing configuration
        AppRoutingModule,
        //State Mgmt
        NgxsModule.forRoot([UserState, AlertState, CattleState, MilkingState, WorkState, InfrastructureState]),
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
            }, 
            cacheLocation : 'localstorage',
            useRefreshTokens : true
        })], 
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }, 
            { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
            AuthGuard, 
            MessageService, 
            DialogService, 
            CowNamePipe,
            PenNamePipe,
            GroupNamePipe,
            provideAnimationsAsync(),
            provideHttpClient(withInterceptorsFromDi()),
            providePrimeNG({ 
            theme: {
                preset: AuraLime,
            }
        })
        ] 
    })
export class AppModule {}
