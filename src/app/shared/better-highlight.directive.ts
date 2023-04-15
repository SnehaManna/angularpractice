import { Directive, ElementRef, HostBinding, HostListener, OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@HostBinding('style.backgroundColor') BackGroundColor?: string;
  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }
ngOnInit(): void {
  // this.renderer.setStyle(this.elmRef.nativeElement,'background-color','blue')
}
@HostListener('mouseover') mouseover(element: Event){
  // this.renderer.setStyle(this.elmRef.nativeElement,'background-color','blue')
  this.BackGroundColor= 'blue'
}
@HostListener('mouseleave') mouseleave(element: Event){
  // this.renderer.setStyle(this.elmRef.nativeElement,'background-color','transparent')
  this.BackGroundColor= 'transparent'
}
}
