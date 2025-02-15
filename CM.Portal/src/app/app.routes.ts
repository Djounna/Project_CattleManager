import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { WorkersPageComponent } from './screens/work/workers-page/workers-page.component';
import { JobsPageComponent } from './screens/work/jobs-page/jobs-page.component';
import { GroupPageComponent } from './screens/cattle/group-page/group-page.component';
import { MilkingPageComponent } from './screens/milk/milking-page/milking-page.component';
import { CowDetailsComponent } from './screens/cows/cow-details/cow-details-page.component';
import { StatisticsCowsPageComponent } from './screens/statistics/statistics-cows-page/statistics-cows-page.component';
import { SatisticsJobsPageComponent } from './screens/statistics/satistics-jobs-page/satistics-jobs-page.component';
import { PenPageComponent } from './screens/cattle/pen-page/pen-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'statisticscows', component: StatisticsCowsPageComponent, canActivate:[AuthGuard]},
  { path: 'statisticsjobs', component: SatisticsJobsPageComponent, canActivate:[AuthGuard]},
  { path: 'workers', component: WorkersPageComponent, canActivate:[AuthGuard]},
  { path: 'jobs', component: JobsPageComponent, canActivate:[AuthGuard]},
  { path: 'cows', component: CowsPageComponent, canActivate:[AuthGuard]},
  { path: 'cowDetails/:id', component: CowDetailsComponent, canActivate:[AuthGuard]},
  { path: 'groups', component: GroupPageComponent, canActivate:[AuthGuard]},
  { path: 'pens', component: PenPageComponent, canActivate:[AuthGuard]},
  { path: 'milking', component: MilkingPageComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];
