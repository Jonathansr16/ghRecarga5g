import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private ElementRef: ElementRef) { }


  @HostListener('error')
  noImage() {
    const element = this.ElementRef.nativeElement;
    element.src= "assets/img/noImage2.webp";
  }
}
