import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
  //selector: 'button[FundoAmarelo]' //Só funciona pra botão
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2)  {

    this.renderer.setStyle(this.elementRef.nativeElement, 
      'background-color', 'yellow');

    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,
    //  'background-color', 'yellow');

  }




}
