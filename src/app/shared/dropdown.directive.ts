import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.Open') isOpen=false;
  constructor() { }
@HostListener('click') toggleOpen(){
this.isOpen = !this.isOpen
}
}
