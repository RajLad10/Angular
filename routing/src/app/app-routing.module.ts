import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee/employee.component';

const routes: Routes = [
  // {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "emp", loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
