import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  // redirect rout
  {
    path:'',redirectTo:"login",pathMatch:'full'
  },
  //login rout
  {path:'login',component:LoginComponent},
  //main and parent rout
  {path:'',component:LayoutComponent,
    children:[
      {path:"employee",component:EmployeeComponent},
      {path:"dashboard",component:DashboardComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
