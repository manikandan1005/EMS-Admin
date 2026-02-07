import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

// Import Lucide Angular
import { LucideAngularModule, Briefcase, MessageSquare, Users, FileText, UserCheck, GraduationCap } from 'lucide-angular';
import { LoginComponent } from './component/login/login.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectEmployeesComponent } from './component/project-employees/project-employees.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    EmployeeComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectEmployeesComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    // Pick icons you want to use
    LucideAngularModule.pick({
      Briefcase,
      MessageSquare,
      Users,
      FileText,
      UserCheck,
      GraduationCap
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
