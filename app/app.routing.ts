import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { CreateServiceComponent } from './create-service/create-service.component'
import { SrListComponent } from './sr-list/sr-list.component'
import { SrDetailComponent } from './sr-detail/sr-detail.component'
import { AssessComponent } from './assess/assess.component'
import { ExecuteComponent } from './execute/execute.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegistryComponent } from './registry/registry.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'login', component: LoginComponent},
   { path: 'csr', component: CreateServiceComponent},
   { path: 'srlist', component: SrListComponent},
   { path: 'srdetail', component: SrDetailComponent},
   { path: 'execute', component: ExecuteComponent},
   { path: 'assess', component: AssessComponent},
   { path: 'dashboard', component: DashboardComponent},
   { path: 'registry', component: RegistryComponent},
   { path: 'view', component: ViewComponent},

];
export const routing = RouterModule.forRoot(appRoutes);
