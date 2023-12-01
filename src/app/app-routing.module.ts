import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path :'login', component: LoginComponent},
  {path :'home', component: RegisterComponent},
  {path :'verification', component: VerificationComponent},
  {path :'register', component: RegisterComponent},
  {path :'dashboard', component: DashboardComponent},
  {path :'employee', component: EmployeeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent]