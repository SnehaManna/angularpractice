import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() featureselected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
 onSelect(feature:string){
this.featureselected.emit(feature);
}
}
