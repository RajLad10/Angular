import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener ('mouseover') onMouseOver(){
    this.element.nativeElement.style.backgroundColor = 'rgb(148, 148, 250)';    
  }

  @HostListener ('mouseout') onMouseOut(){
    this.element.nativeElement.style.backgroundColor = '';
  }
}
