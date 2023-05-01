import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { TemplateFormComponent } from './employee/employee-list/template-form/template-form.component';
import { ReactiveFormComponent } from './employee/employee-list/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEmployeeComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
