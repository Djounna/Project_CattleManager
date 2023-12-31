import { Routes } from '@angular/router';
import { CowsPageComponent } from './screens/cows/cows-page/cows-page.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cows', component: CowsPageComponent },
];
