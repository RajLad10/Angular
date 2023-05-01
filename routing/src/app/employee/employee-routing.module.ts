import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './employee/employee-list/template-form/template-form.component';
import { ReactiveFormComponent } from './employee/employee-list/reactive-form/reactive-form.component';

const routes: Routes = [
  // {path: "add-emp", loadChildren: () => import('./employee/add-employee/add-employee.component').then(m => m.AddEmployeeComponent)},
  // {path: "emp-list", loadChildren: () => import('./employee/employee-list/employee-list.component').then(m => m.EmployeeListComponent)},
  {path: "", component: EmployeeComponent},
  {path: "emp-list", component: EmployeeListComponent},
  {path: "add-emp", component: AddEmployeeComponent},
  {path: "template-form", component: TemplateFormComponent},
  {path: "reactive-form", component: ReactiveFormComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }
