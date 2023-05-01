import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent {
  public myId = "testId";
  // public day = "Tuesday";
  public date = "18th April";
  public year = 2023;
}
