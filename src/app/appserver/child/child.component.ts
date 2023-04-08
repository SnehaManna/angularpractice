import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,AfterContentInit {
@ContentChild('contentparagraph') content:ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
    console.log("text content of paragraph:" + this.content?.nativeElement.textContent)
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log("text content of paragraph:" + this.content?.nativeElement.textContent)
  }
}
