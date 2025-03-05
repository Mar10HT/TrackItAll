import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [
    {path: '',redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent, children:[
        {path: "", component: WelcomeComponent},
        {path: "users", component: UsersComponent},
        {path: "reports", component: ReportsComponent},
    ]},
    {path: '**',redirectTo:'dashboard', pathMatch:'full'}
];
