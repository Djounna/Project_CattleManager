import { Routes } from '@angular/router';
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { WorkersPageComponent } from './screens/work/workers-page/workers-page.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { JobsPageComponent } from './screens/work/jobs-page/jobs-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'workers', component: WorkersPageComponent, canActivate:[AuthGuard]},
  { path: 'jobs', component: JobsPageComponent, canActivate:[AuthGuard]},
  { path: 'cows', component: CowsPageComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];
