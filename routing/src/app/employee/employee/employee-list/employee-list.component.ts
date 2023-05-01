import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  headers = [
    {
      name: "NAME",
      email: "EMAIL",
      designation: "DESIGNATION",
      empType: "EMPLOYMENT TYPE",
      password: "PASSWORD"
    }
  ]
  
  employees = [
    {
      name : "Raj",
      email : "raj@gmail.com",
      designation: "Frontend",
      empType: "Internship",
      password: "rajlad10",
    },
    {
      name : "Tatsat",
      email : "tatsat@gmail.com",
      designation: "Frontend",
      empType: "Internship",
      password: "tatsat",
    },
    {
      name : "Praveen",
      email : "praveen@gmail.com",
      designation: "Frontend",
      empType: "Internship",
      password: "praveen",
    },
    {
      name : "Prince",
      email : "prince@gmail.com",
      designation: "Frontend",
      empType: "Internship",
      password: "prince",
    },
    {
      name : "Jaydeep",
      email : "jaydeep@gmail.com",
      designation: "Frontend",
      empType: "Internship",
      password: "jaydeep",
    }
  ]
}
