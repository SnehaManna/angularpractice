import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class GamingComponent implements OnInit {
oddNumbers:Array<number>=[];
evenNumbers:Array<number>=[];
  constructor() { }

  ngOnInit(): void {
  }
  onIntervalFired(firedvalue:number){
if(firedvalue % 2 === 0){
  this.evenNumbers.push(firedvalue)
}else{
  this.oddNumbers.push(firedvalue)
}
  }
}