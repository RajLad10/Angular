import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees = [
      {
        id : 101,
        name : "Raj",
        department : "Frontend"
      },
      {
        id : 102,
        name : "Prince",
        department : "Database"
      },
      {
        id : 103,
        name : "Praveen",
        department : "BA"
      }
  ]
}
