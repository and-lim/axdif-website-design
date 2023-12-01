import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { VerificationComponent } from './verification/verification.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { register } from 'swiper/element/bundle';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import {CalendarModule} from 'primeng/calendar';
import { EmployeeComponent } from './employee/employee.component';
import { ChartModule } from 'primeng/chart';
import Swiper from 'swiper';
import { PiechartComponent } from './piechart/piechart.component';
import { TaskchartComponent } from './taskchart/taskchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    VerificationComponent,
    SidebarComponent,
    RegisterComponent,
    CarouselComponent,
    DashboardComponent,
    NavbarComponent,
    EmployeeComponent,
    PiechartComponent,
    TaskchartComponent,
    LinechartComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    CarouselModule,
    CardModule,
    CalendarModule,
    ChartModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
