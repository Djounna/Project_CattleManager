import { Routes } from '@angular/router';
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { WorkersPageComponent } from './screens/work/workers-page/workers-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workers', component: WorkersPageComponent },
  { path: 'cows', component: CowsPageComponent },
];
