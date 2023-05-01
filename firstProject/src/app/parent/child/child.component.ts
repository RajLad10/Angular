import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() emp : any;

  @Input() head : any;

  searchText: string = "";

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  deleteRow(item: any){
    this.delete.emit(item);
  }
}
