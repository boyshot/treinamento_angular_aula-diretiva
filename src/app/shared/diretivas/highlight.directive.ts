import {
  Directive, HostListener, ElementRef, Renderer2,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOverPaulo() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeavePaulo() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') 
  backgroundColor: string;

  @Input()
  defaultColor: string = 'white';
  @Input('Highlight')
  highlightColor: string = 'yellow';
}
