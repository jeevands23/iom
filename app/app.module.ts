import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';
import { CreateServiceComponent } from './create-service/create-service.component';
import { SrListComponent } from './sr-list/sr-list.component';
import { TablesortPipe } from './pipes/tablesort.pipe';
import { Tablesort2Pipe } from './pipes/tablesort.pipe';
import { Tablesort3Pipe } from './pipes/tablesort.pipe';
import { SrDetailComponent } from './sr-detail/sr-detail.component'
import { CommonService } from './-services/common.service'
import { DatePipe } from '@angular/common';
import { AssessComponent } from './assess/assess.component';
import { ExecuteComponent } from './execute/execute.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RegistryComponent } from './registry/registry.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CreateServiceComponent,
    SrListComponent,
    TablesortPipe,
    Tablesort2Pipe,
    Tablesort3Pipe,
    SrDetailComponent,
    AssessComponent,
    ExecuteComponent,
    DashboardComponent,
    RegistryComponent,
    ViewComponent,
 
   
  ],
  imports: [
    BrowserModule,      
    FormsModule,    
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DateTimePickerModule,
   NgxPaginationModule,
    routing,
    ChartsModule
  ],
  providers: [NavbarService,CommonService,DatePipe,ChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
