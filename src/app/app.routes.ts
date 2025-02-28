import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '',redirectTo:'dashboard'},
    {path:'dashboard', component: DashboardComponent}
];
