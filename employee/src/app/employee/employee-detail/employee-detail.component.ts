import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  constructor(private activeRoute: ActivatedRoute) {
    
  }
  id : any;
  ngOnInit() : void{
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }
}
