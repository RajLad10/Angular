import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';

// const emp:Routes = [
//   {path: "emp-list", component: EmployeeListComponent},
//   {path: "emp-list/:id", component: EmployeeDetailComponent},
// ]

@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    // RouterModule.forRoot(emp)
  ]
})
export class EmployeeModule {

}
