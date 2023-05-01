import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent {

  public name = "Raj";
  public successClass = "text-success";
  public isItalic = true;
  public hasError = false;

  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-italic" : this.isItalic,
  }

  
}
