import { ElementRef, HostListener, HostBinding } from '@angular/core';
import { Directive, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.color') color: string;
 
  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green')
    this.color = 'green';
 }

 @HostListener('mouseleave') mouseleave(eventData : Event){
  // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black')
  this.color = 'black';
  
}
  
//  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green')
  }

}
