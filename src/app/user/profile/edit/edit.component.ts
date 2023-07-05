import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

user:Array<{id:number,name:string}>=[{id:1,name:"Max"},{id:2,name:"John"},{id:3,name:"Charley"}]


  constructor() { }

  ngOnInit(): void {
  }

}
