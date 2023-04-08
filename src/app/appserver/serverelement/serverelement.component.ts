import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.scss'],
})
export class ServerelementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('heading') header:ElementRef | undefined;
  @Input('srvElement') element:
    | { type: string; name: string; content: string }
    | undefined;
  @Input() name: string | undefined;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changess: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changess);
  }
  ngOnInit(): void {
    console.log('ngOnit called');
    console.log("Text Content:"+ this.header?.nativeElement.textContent)
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log("Text Content:"+ this.header?.nativeElement.textContent)
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
