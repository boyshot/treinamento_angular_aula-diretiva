import { Directive, HostListener, ElementRef, Renderer2, 
  HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2) {

     }

     //Escuta Evento do HTML
  @HostListener('mouseenter') onMouseOverPaulo(){
    /*
    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      'background-color', 
      'yellow'); */

      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeavePaulo(){

    /*
    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      'background-color', 
      'white');*/
      this.backgroundColor = 'white';
  }

  //Associa Atributos
  @HostBinding('style.backgroundColor') backgroundColor: string;

}
