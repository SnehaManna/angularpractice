import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometask1',
  templateUrl: './hometask1.component.html',
  styleUrls: ['./hometask1.component.scss'],
})
export class Hometask1Component implements OnInit {
  listArray: Array<{ id: number; name: string; email: string }> = [
    {
      id: 0,
      name: 'sneha',
      email: 'snehamanna62@gmail.com',
    },
    {
      id: 1,
      name: 'Max',
      email: 'max@gmail.com',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
    },
  ];
  listShow = null;


  valueName: any ='' ;
  valueEmail = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.listArray);
  }
  OnShow(i: any=0) {
    console.log(i);
    this.listShow = i;
  }
  OnUpdate(i: any=0) {
   let upd_obj = this.listArray.findIndex((obj) => obj.id ===i);
    this.listArray[upd_obj].name = this.valueName;
    this.listArray[upd_obj].email = this.valueEmail;
    console.log(this.listArray);
  }
}
