import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

headings = [
  {
    id : "ID",
    name : "Name",
    department : "Department",
    empType : "Employment Type",
    date : "Date",
    action: "Action",
  }
]

employees = [
  {
    id : 101,
    name : "Raj",
    department : "Frontend",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 102,
    name : "Darshan",
    department : "Database",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 103,
    name : "Anirudh",
    department : "BA",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 104,
    name : "Jignesh",
    department : "QA",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 105,
    name : "Tatsat",
    department : "Frontend",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 106,
    name : "Nisarg",
    department : "Data",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 107,
    name : "Nikunj",
    department : ".NET",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 108,
    name : "Dhru",
    department : "QA",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 109,
    name : "Sahil",
    department : "Data",
    empType : "Internship",
    date: new Date(),
  },
  {
    id : 110,
    name : "Jaitry",
    department : "Frontend",
    empType : "Internship",
    date: new Date(),
  },
]

deleteRow(emp: any){

}
}
